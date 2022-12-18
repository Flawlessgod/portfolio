import React from "react";
import "../styles/Home.css";

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
  "computer science student",
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

          <LinkedInIcon />

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
              <span>N/A</span>
            </li>
          </ol>
        </div>

        <div className="skills">
          <ol className="list">
            <li className="item">
              <div>Languages</div>
              <span>Java, Python, Javascript</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;
