import React from "react";
import "./App.scss";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
import Work from "./sections/Work";
import Freelance from "./sections/Freelance";
import Footer from "./sections/Footer";
import Skills from "./sections/Skills";
function App() {
  return (
    <div className="App">
      <div className="center" id="top">
        <Navbar />
        <About />
        <Work />
        <Freelance />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
