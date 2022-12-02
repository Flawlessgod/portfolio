import React from "react";
import "../styles/Footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Resume from "@mui/icons-material/Article";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon />
        <Resume />
      </div>
      <p>&copy; 2022 Christophe Gerard</p>
    </div>
  );
}

export default Footer;
