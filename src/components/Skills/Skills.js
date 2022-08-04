import React, { useState } from "react";
import "./Skills.css";
import typescript from "../../images/typescript.png";

const Skills = () => {
  const [clas, setClas] = useState(false);

  const animation = () => {
    let height = document.documentElement.scrollTop;
    height > 1333 && setClas(true);
  };

  window.addEventListener("scroll", animation);

  return (
    <div id="skills" className="container skills">
      <h3>Technical Skills</h3>
      <div className="knowladge">
        <ul>
          <li>
            <i className="fab fa-js-square"></i>
            <p>JavaScript</p>
          </li>
          <li>
            <img src={typescript} alt="typescript" />
            <p>TypeScript</p>
          </li>
          <li>
            <i className="fab fa-react"></i>
            <p>React</p>
          </li>
          <li>
            <i className="fab fa-css3"></i>
            <p>CSS3</p>
          </li>
          <li>
            <i className="fab fa-html5"></i>
            <p>HTML5</p>
          </li>
          <li>
            <i className="fab fa-bootstrap"></i>
            <p>Bootstrap</p>
          </li>
          <li>
            <i className="fab fa-github"></i>
            <p>Github</p>
          </li>
          {/*<li>
            <i className="fab fa-npm"></i>
            <p>NPM</p>
          </li>*/}
        </ul>
        <div>
          <h3>Soft Skills</h3>
          <div className="line"></div>
          <div className="soft">
            <div className="team-work">
              <h4>TeamWork</h4>
              <div>
                <span className={clas ? "span" : ""}></span>
                <p>95%</p>
              </div>
            </div>
            <div className="organization">
              <h4>Organization</h4>
              <div>
                <span className={clas ? "span span90" : ""}></span>
                <p>90%</p>
              </div>
            </div>
            <div className="communication">
              <h4>Communication</h4>
              <div>
                <span className={clas ? "span" : ""}></span>
                <p>95%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
