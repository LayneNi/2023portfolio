// import React from "react";
// import { AiFillHtml5, AiFillFileText } from "react-icons/ai";
// import { DiCss3 } from "react-icons/di";
// import { SiJavascript, SiMysql, SiMongodb, SiMaterialui } from "react-icons/si";
// import { FaNodeJs, FaReact, FaBootstrap } from "react-icons/fa";

const haiku = "HTML \n  \n CSS \n \n JavaScript \n  \n NodeJs \n \n MySql";
const haiku2 = "React \n  \n NoSql \n \n JavaScript \n  \n NodeJs \n \n MySql";
function replaceWithBr() {
  return haiku.replace(/\n/g, "<br />");
}

function replaceWithBr2() {
  return haiku2.replace(/\n/g, "<br />");
}

function SkillForm() {
  const skillsArr = [
    {
      text: "HTML5",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      // icon: <AiFillHtml5 className="iconHover" />,
    },
    {
      text: "CSS",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      // icon: <DiCss3 className="iconHover" />,
    },
    {
      text: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      // icon: <SiJavascript className="iconHover" />,
    },
    {
      text: "NodeJS",
      link: "https://developer.mozilla.org/en-US/docs/Web/API/Node",
      // icon: <FaNodeJs className="iconHover" />,
    },
    {
      text: "Express",
      link:
        "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
      // icon: <FaNodeJs className="iconHover" />,
    },
    {
      text: "MySQL",
      link: "https://dev.mysql.com/doc/",
      // icon: <SiMysql className="iconHover" />,
    },
    {
      text: "MongoDB",
      link: "https://www.mongodb.com/",
      // icon: <SiMongodb className="iconHover" />,
    },
    {
      text: "ReactJS",
      link: "https://reactjs.org/",
      // icon: <FaReact className="iconHover" />,
    },
    {
      text: "Bootstrap",
      link: "https://getbootstrap.com/",
      // icon: <FaBootstrap className="iconHover" />,
    },
    {
      text: "Material UI",
      link: "https://mui.com/",
      // icon: <SiMaterialui className="iconHover" />,
    },
    {
      text: "Tailwind CSS",
      link: "https://tailwindcss.com/",
      // icon: <SiMaterialui className="iconHover" />,
    }
  ];

  return (
    <>
      <div className="skillForm">
        <div
          id="Skills"
          className="skillSection border-2 border-white rounded-10 flex justify-center items-center text-24 bg-blue-900 hover:bg-blue-800"
        >
          <h1 className="neonText" style={{ color: "white" }}>
            Skills
          </h1>
          <div
            display={"flex"}
            margin="0"
            className="skillTextSection"
            style={{ color: "white", marginBottom: 0 }}
          >
            {skillsArr.map((skill) => (
              <div>
                <a
                  href={skill.link}
                  className="p-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {skill.icon}
                  <h3 className="skillText">{skill.text}</h3>
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
      <script
        type="text/javascript"
        src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"
      ></script>
      <script
        src="https://kit.fontawesome.com/8638d0ac87.js"
        crossOrigin="anonymous"
      ></script>
      <script type="text/javascript">emailjs.init('Zr22jefdTB8t3hG2u')</script>
    </>
  );
}

export default SkillForm;
