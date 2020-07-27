import React from "react";
import "./App.scss";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
import Work from "./sections/Work";
import Freelance from "./sections/Freelance";
import Footer from "./sections/Footer";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="center" id="top">
        <Navbar />
        <About />
        <Work />
        <Freelance />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
