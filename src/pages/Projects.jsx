import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            // items in each ProjectList
            <ProjectItem
              id={idx}
              name={project.name}
              image={project.image}
              github={project.github}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
