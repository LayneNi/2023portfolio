import * as React from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import anime from 'animejs';
import SubmitBtn from "../components/SubmitButton/submitBtn";
import DeleteBtn from "../components/DeleteButton/DeleteBtn";

const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const userID = process.env.REACT_APP_EMAILJS_USER_ID;

export const ContactMe = () => {
  const form = useRef();

    const clearForm = (e) => {
      // e.preventDefault(); 
      form.current.reset(); // Reset the form fields
    };
  
  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contactForm">
    <form id="formInterior" ref={form} onSubmit={sendEmail}>
      <label for="from_name">Name</label>
      <input type="text" className="inputBox" name="from_name" id="from_name"/>
      <label for="from_email">Email</label>
      <input type="text" className="inputBox" name="from_email" id="from_email"/>
      <label>Message</label>
      <textarea id="messageBox" className="inputBox" name="message" />
      <SubmitBtn type="submit" id="submitButton" value="Send" onClick={sendEmail} />
      {/* <input type="submit" id="submitButton" value="Send" /> */}
      <button class="clearBtn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Clear
</button>
      <DeleteBtn type="submit" id="submitButton" value="submit" onClick={clearForm} />
    </form>
    </div>
  );
};
export default ContactMe;