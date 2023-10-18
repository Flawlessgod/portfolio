import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  return (
    // if navbar is open else its closed
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            // reverse whatever the last boolean value was
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/portfolio">Home</Link>
        <Link to="/portfolio/projects">Projects</Link>
        <Link to="/portfolio/experience">TimeLine</Link>
        <Link to="/portfolio/piano">Piano</Link>
      </div>
    </div>
  );
}

export default Navbar;
