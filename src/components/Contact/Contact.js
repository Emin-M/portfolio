import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import ContactParticles from "../Particles/ContactParticles";

const Result = () => {
  return (
    <div data-aos="fade-down" className="sended">
      <h4>
        Your message successfully sended! I'll contact with you as soon as
        possible.
      </h4>
    </div>
  );
};

const Contact = () => {
  const [result, setResult] = useState(false);
  const [inp1, setInp1] = useState([]);
  const [inp2, setInp2] = useState([]);
  const [inp3, setInp3] = useState([]);
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inp1.length < 1) {
      setError("Please Enter Your Name");
    } else if (inp2.length < 3) {
      setError("Please Enter Your Gmail");
    } else if (inp3.length < 5) {
      setError("Please Enter Message Section");
    } else {
      sendEmail(e);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_89njg0i",
        "template_4oxu8uw",
        e.target,
        "user_4oK9NcvPhKj83Z5QdXcY5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setInp1([]);
    setInp2([]);
    setInp3([]);
    setError();
    setResult(true);
    setTimeout(() => {
      setResult(false);
    }, 5000);
  };

  return (
    <div id="contact" className="contactt">
      <ContactParticles />
      <h1 data-aos="fade-down">Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div data-aos="fade-up" className="inputs">
            <label htmlFor="exampleInputEmail1">Full Name</label>
            <input
              onChange={(e) => setInp1(e.target.value)}
              type="text"
              name="name"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Full Name"
            />
            <label htmlFor="exampleInputEmail2">Email address</label>
            <input
              onChange={(e) => setInp2(e.target.value)}
              type="email"
              name="email"
              placeholder="Enter Email"
              className="form-control"
              id="exampleInputEmail2"
            />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
            <div className="error">{error}</div>
          </div>
          {result ? (
            <Result />
          ) : (
            <textarea
              data-aos="fade-up"
              onChange={(e) => setInp3(e.target.value)}
              name="message"
              cols="50"
              rows="13"
              placeholder="Enter Message"
            ></textarea>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;
