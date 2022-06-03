import React, { useState } from "react";

/* Components */
import Modall from "./components/Projects/Modal";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import portfolio from "./components/Projects/ProjectData";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

/* Design */
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [currentItem, setCurrentItem] = useState(portfolio[0]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  Aos.init({
    offset: 10,
    duration: 1800,
  });

  return (
    <div className="App">
      <Modall
        show={show}
        currentItem={currentItem}
        setC={setCurrentItem}
        handleClose={handleClose}
      />
      <Home />
      <About />
      <Skills />
      <Projects setC={setCurrentItem} show={setShow} />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
