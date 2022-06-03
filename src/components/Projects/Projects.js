import React from "react";
import Project from "./Project";
import ProjectData from "./ProjectData";
import TopProjectData from "./TopProjectData";
import "./Projects.css";

const Projects = (props) => {
  const projectList = ProjectData.map((data) => {
    return (
      <Project
        key={data.name}
        setC={props.setC}
        show={props.show}
        project={data}
      />
    );
  });

  const topProjectList = TopProjectData.map((data) => {
    return (
      <Project
        key={data.name}
        setC={props.setC}
        show={props.show}
        project={data}
      />
    );
  });

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      id="projects"
      className="projects container"
    >
      <h3>My Top Projects</h3>
      <div className="line"></div>
      <div className="list">{topProjectList}</div>
      <h3>My Projects</h3>
      <div className="line"></div>
      <div className="list">{projectList}</div>
    </div>
  );
};

export default Projects;
