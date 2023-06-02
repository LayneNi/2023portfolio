import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import $ from 'jquery';

function Projects() {
  useEffect(() => {
    const sr = ScrollReveal();
    if ($(window).width() < 768) {
      if ($('.timeline-content').hasClass('js--fadeInLeft')) {
        $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
      }
      sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
    } else {
      sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
      sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
    }
    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });
    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });
  }, []);

  const projectsArray = [
    {
        title: "My Friendly Monster",
        description: "A fun app designed for collecting digital novelty characters. My Friendly Monster is a full-stack react app that utilizes MongoDB. The 90's style theme and layout was accomplished using bootstrap to assist with CSS styling in order to create a nostalgic aesthetic. Each monster is stored in a MongoDB database and can be updated or deleted by the user. You can also feed each monster as well as make them dance or sleep!",
        tools: "HTML, CSS, JavaScript, React, Bootstrap, MongoDB",
        link: "https://vast-inlet-40115.herokuapp.com/",
        repo: "https://github.com/LayneNi/my-friendly-monster",
        // image:require("../../images/monster-dashboard-snippet.PNG")
    },
    {
      title: "Workout Tracker",
      description: "This application is a workout tracker with some innovative and useful features such as charting recent workout data and suggesting new workouts. Creating this project was the first time I had ever implemented MySql in a full-stack web application and it worked out amazingly! All of a users workout data is stored in a MySql database to be reference at any time. We used the stored data to develop a chart using chartJs and a third party API is used to generate workout suggestions for the user.",
      tools: "HTML, CSS, JavaScript, Bootstrap, MySql",
      link: "https://obscure-peak-77091.herokuapp.com/login",
      repo: "https://github.com/LayneNi/workout-tracker",
      // image:require("../../images/Workout-Tracker-Screenshot.PNG")
  },
  {
    title: "Disney Character Locator",
    description: "This application was so fun to make! In a group of three people we were able to utilize a third party API for the first time and create this! As a group we put a lot of thought into the design of this application. We used colors and a layout that we thought would feel authentic to a Disney fanatic. Utilizing local storage allowed us to create a search history section to reference previously serached characters and the robust Disney API gave us great data to populate for each character.",
    tools: "HTML, CSS, JavaScript",
    link: "https://layneni.github.io/disney-character-locator/",
    repo: "https://github.com/LayneNi/disney-character-locator",
    // image:require("../../images/Disney-screenshot-3.PNG")
},
{
  title: "Weather Api",
  description: "Creating this application was very challenging when I first started it. Despite how daunting this task initially seemed, I loved creating this weather dashboard. When I first started this application I was just learning how to utilize data from a third party API. I quickly got the hang of working with an API and I had so much fun utilizing the data. This was the project that showed me the possibilities are endless when using third party APIs. The design on desktop and mobile is meant to be simple resembing modern weather applications.",
  tools: "HTML, CSS, JavaScript",
  link: "https://layneni.github.io/Weather-API-Challenge/",
  repo: "https://github.com/LayneNi/Weather-API-Challenge",
  // image:require("../../images/Weather-Dashboard-Screenshot-1.PNG")
},
{
title: "Quote Generator",
description: "I created this quote generator, after I finished my program with the University of Pennsylvania, as a hobby project intedned to inspire myself and others. Personally I feel there is a lot to be learned from studying the words of successful people of all kinds. This quote generator is meant to supply wisdom to the user based on specific topics. The idea for the design of this application is to be simple and have very few items on the screen in order to bring the users focus to the quote.",
tools: "HTML, CSS, JavaScript",
link: "https://layneni.github.io/Quote-Generator/",
repo: "https://github.com/LayneNi/Quote-Generator",
// image:require("../../images/quote-generator-screenshot.PNG")
},
{
title: "Pokemon Quiz",
description: "This was my first gamified web application that I ever created. Creating this project was my first time implicating local storage to an app and while it was very fun to be able to save players high scores, I noticed how local storage can be utilized in other applications. This project also introduced me to process such as dynamically generating buttons onto a screen as well as using set interval to add timing functionality. The processes used to create this fairly simple application can be used on a larger scale to create more robust applications.",
tools: "HTML, CSS, JavaScript",
link: "https://layneni.github.io/quiz-challenge/",
repo: "https://github.com/LayneNi/quiz-challenge",
// image:require("../../images/Pokemon-Quiz-Screenshot.png")
},
]

  return (
    <>
      <header>
        <div className="container text-center">
          <h1>Layne Nigro's</h1>
          <p>Project Portfolio</p>
        </div>
      </header>
      <section className="timeline">
        <div className="container">
          {projectsArray.map((project, index) => (
            <div className="timeline-item" id={`project-${index}`} key={`project-${index}`}>
              <div className="timeline-img"></div>

              <div className="timeline-content timeline-card js--fadeInRight">
                <div className="timeline-img-header">
                  <h2>Title: {project.title}</h2>
                </div>
                <div className="date">25 MAY 2016</div>
                <p>{project.description}</p>
                <a className="bnt-more" href={project.link}>
                  Live Website
                </a>
                <a className="bnt-more" href={project.repo}>
                  Repository
                </a>
                {/* <img src={project.image} alt={project.title} /> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
