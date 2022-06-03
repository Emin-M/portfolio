import React from "react";
import "./Projects.css";

const Project = (props) => {
  return (
    <div
      onClick={() => {
        props.setC(props.project);
        props.show(true);
      }}
      className="card"
    >
      <img
        className="card-img-top"
        src={props.project.image}
        alt={props.project.name}
      />
      <h4 className="card-title">{props.project.name}</h4>
    </div>
  );
};

export default Project;
