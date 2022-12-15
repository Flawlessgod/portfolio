import React from "react";
import PersonalProject from "../components/ProjectItems";
import "../styles/Projects.css";
//import proj1 from "../assets/proj1.jpg";

import { projectList } from "../helpers/ProjectList";
function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectlist">
        {projectList.map((project) => {
          return <PersonalProject name={project.name} image={project.image} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
