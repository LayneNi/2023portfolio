import * as React from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import anime from 'animejs';
import SubmitBtn from "../components/SubmitButton/submitBtn";
import DeleteBtn from "../components/DeleteButton/DeleteBtn";

export const ContactMe = () => {
  const form = useRef();

    const clearForm = (e) => {
      e.preventDefault(); // Prevent form submission
      form.current.reset(); // Reset the form fields
    };
  
  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs.sendForm('service_fvjmqkr', 'template_ner8j1u', form.current, 'Zr22jefdTB8t3hG2u')
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
      <DeleteBtn type="submit" id="submitButton" value="submit" onClick={clearForm} />
    </form>
    </div>
  );
};
export default ContactMe;