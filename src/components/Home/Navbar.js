import React, { useState } from "react";
import "./Home.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="nav_container">
      <nav>
        <button onClick={() => setShow(!show)}>
          {show ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-solid fa-bars"></i>
          )}
        </button>
        <ul className={`links ${show ? "show" : ""}`}>
          <li>
            <a onClick={() => setShow(false)} href="#home">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => setShow(false)} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={() => setShow(false)} href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a onClick={() => setShow(false)} href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a onClick={() => setShow(false)} href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
