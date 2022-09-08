import React from "react";
import Navbar from "./Navbar";
import Typed from "react-typed";
import "./Home.css";
import image_netlify from "../../images/netlify_icon.png";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <div className="home">
        <div className="info text-center">
          <h1>Hi! I'm Emin.</h1>
          <Typed
            className="front"
            strings={["FRONT-END DEVELOPER!"]}
            typeSpeed={80}
            backSpeed={40}
            loop
          />
          <p>
            I'm an ambitious, commercially focused website developer with a
            wealth of transferable skills and a passion for digital innovation,
            I'm seeking an entry-level role as a{" "}
            <span className="df">React Developer.</span>
          </p>
          <div className="links">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/Emin-M"
            >
              <i className="fab fa-github hover_i"></i>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/emin-mustafazade/"
            >
              <i className="fab fa-linkedin-in hover_i"></i>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://app.netlify.com/teams/mustafazadeemin2000/overview"
            >
              <img src={image_netlify} alt="netlify" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
