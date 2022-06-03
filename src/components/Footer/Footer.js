import React from "react";
import "./Footer.css";
import netlify from "../../images/netlify_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <i
        onClick={() =>
          window.scrollTo({
            top: 10,
            left: 10,
            behavior: "smooth",
          })
        }
        className="fas fa-arrow-up"
      ></i>
      <div className="icons">
        <a rel="noreferrer" target="_blank" href="https://github.com/Emin-M">
          <i className="fab fa-github hover_i"></i>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/emin-mustafazade-ba8475211"
        >
          <i className="fab fa-linkedin-in hover_i"></i>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://app.netlify.com/teams/mustafazadeemin2000/overview"
        >
          <img src={netlify} alt="netlify icon" />
        </a>
      </div>
      <p>Site developed by Emin Mustafazade using React.js</p>
    </div>
  );
};

export default Footer;
