import React from "react";
import Particle from "../Particles/Particles";
import image from "../../images/my-cover-photo_2.jpeg";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="image-container">
        <img src={image} alt="about" />
      </div>
      <Particle />
      <div className="content">
        <div className="about">
          <h2>About Me</h2>
          <p className="p1">
            I am an experienced React Developer with an active interest in web
            development & digital technology. I am looking for a junior
            developer role that will allow me to blend creativity, programming &
            problem-solving and also allow me to apply my wide-ranging
            operational expertise.
          </p>
        </div>
        <div className="contact">
          <div>
            <h2>Contact Details</h2>
            <p>
              Phone Number: <span>+994 70 565-56-99</span>
            </p>
            <p>
              Email Adress: <span>mustafazadeemin2000@gmail.com</span>
            </p>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/11qzUtmbZod4uJYFCmumqRVy9-p1BdruE/view"
          >
            <button>
              <i className="fas fa-download"></i>
              My Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
