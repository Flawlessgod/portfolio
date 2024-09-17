import React from "react";
import "../styles/Home.css";
// on new setup had to install "npm i react-router-dom --legacy-peer-deps"
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Resume from "@mui/icons-material/Article";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

import Typical from "react-typical";

const steps = [
  "self-driven",
  1000,
  "task-oriented",
  1000,
  "Computer Science Graduate",
  1000,
];

function Home() {
  return (
    <div className="Home">
      <div className="about">
        <h2>Hello, I am Christophe</h2>
        <div className="prompt">
          <p>
            <Typical wrapper="span" loop={1} steps={steps} />
          </p>

          <a href="https://www.linkedin.com/in/christophe-gerard-449743260/">
            <LinkedInIcon />
          </a>

          <a href="https://docs.google.com/document/d/1QqB4ymzBy0qEQWiPLtwwrZapeMGxI-OFcIX5eJrgnDM/edit?usp=sharing">
            <Resume />
          </a>

          <a href="mailto:christophequentingerard@gmail.com">
            <EmailIcon />
          </a>

          <a href="https://github.com/Flawlessgod">
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <ol className="list">
          <li className="item">
            <div className="skill"> Skills</div>
          </li>
        </ol>
        {/* ordered list  */}
        <ol className="list">
          {/* list */}
          <li className="item">
            <div>Front-End</div>
            <span>React, CSS, HTML</span>
          </li>
        </ol>

        <div className="skills">
          <ol className="list">
            <li className="item">
              <div>Back-End</div>
              <span>MySQL, Posgre</span>
            </li>
          </ol>
        </div>

        <div className="skills">
          <ol className="list">
            <li className="item">
              <div>Languages</div>
              <span>Java, Javascript, C#, Scala, Python</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;
