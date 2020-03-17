import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="titles">
        <p>Back To Top</p>
        <p>Contact</p>
      </div>
      <div className="icons">
        <FontAwesomeIcon className="rotate" icon={faGithub} size="2x" />
        <FontAwesomeIcon className="rotate" icon={faLinkedin} size="2x" />
      </div>
    </div>
  );
};

export default Footer;
