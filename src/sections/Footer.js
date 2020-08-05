import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

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
        <FontAwesomeIcon
          onClick={() => window.open("https://github.com/marwhyte", "_blank")}
          className="rotate"
          icon={faGithub}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={() =>
            window.open("https://www.linkedin.com/in/marco-whyte/", "_blank")
          }
          className="rotate"
          icon={faLinkedin}
          size="2x"
        />
      </div>
    </div>
  );
};

export default Footer;
