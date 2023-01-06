import React from "react";
import "../styles/Footer.css";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Resume from "@mui/icons-material/Article";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">

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
      <p>&copy; 2022 Christophe Gerard</p>
    </div>
  );
}

export default Footer;
