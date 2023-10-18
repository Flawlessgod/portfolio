import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
import { ProjectList } from "../helpers/ProjectList";

function Songs() {
  return (
    <div className="project">
      <h1>Some Piano Songs</h1>
      <div className="songsLists">
        {ProjectList.map((song, idx) => {
          return (
            // items in each ProjectList
            <ProjectItem id={idx} name={song.name} image={song.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Songs;
