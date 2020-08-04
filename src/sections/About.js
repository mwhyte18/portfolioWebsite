import React from "react";
import profilePic from "../images/profilepic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="mySection">
        <h1>Hello, I'm Marco</h1>
        <p>
          I am a full stack web developer, focusing on javascript, react.js,
          react-redux, typescript and node.js
        </p>
        <div className="buttonspacing">
          <button className="github">
            <FontAwesomeIcon icon={faGithub} />
            {"  "}
            mwhyte18
          </button>
          <button className="linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
            {"  "}
            marco-whyte
          </button>
        </div>
      </div>
      <img
        src={profilePic}
        className="aboutImage img-shadow-1"
        alt="computer with react code"
      />
    </div>
  );
};

export default About;
