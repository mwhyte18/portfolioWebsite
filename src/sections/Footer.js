import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="titles">
        <Link
          activeClass="active"
          to="top"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon className="totop" icon={faAngleDoubleUp} size="2x" />
        </Link>
      </div>
      <div className="icons">
        <FontAwesomeIcon className="rotate" icon={faGithub} size="2x" />
        <FontAwesomeIcon className="rotate" icon={faLinkedin} size="2x" />
      </div>
    </div>
  );
};

export default Footer;
