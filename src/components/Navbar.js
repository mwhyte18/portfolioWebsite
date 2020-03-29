import React from "react";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="name">
        <a href="/">Marco Whyte</a>
      </div>
      <div className="navlinks">
        <a href="/#about">About Me</a>
        <a href="/#work">My Work</a>
        <a href="/#freelance">Freelance</a>
        <a className="contactlink" href="/contact">
          Contact
        </a>
        <FontAwesomeIcon
          onClick={() => window.open("https://modernizeme.com/", "_blank")}
          className="changeMode"
          icon={faMoon}
        />
      </div>
    </div>
  );
};

export default Navbar;
