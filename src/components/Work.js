import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Work = () => {
  return (
    <div className="work" id="work">
      <h1>My Work</h1>
      <div className="task">
        <div
          onClick={() => window.open("http://www.google.com", "_blank")}
          className="nameAndIcon"
        >
          <FontAwesomeIcon
            className="clipboard"
            icon={faClipboardList}
            size="3x"
          />

          <h2>Todo App</h2>
        </div>
        <p>
          A simple login todo app, making all your tasks easily accessible. Uses
          react-redux and node.js
        </p>
        <div className="icons">
          <button className="github">
            <FontAwesomeIcon icon={faGithub} />
            {"  "}
            Open Source
          </button>
          <button className="visitSite">Visit Site</button>
        </div>
      </div>
      <div className="task">
        <div
          onClick={() => window.open("http://www.google.com", "_blank")}
          className="nameAndIcon"
        >
          <FontAwesomeIcon
            className="faLaptopCode"
            icon={faQuoteRight}
            size="2x"
          />

          <h2>Quote Generator</h2>
        </div>
        <p>
          A react-redux web app that generates random Kanye quotes and Trump
          tweets, using kanye.rest api and a Donald Trump api
        </p>
        <div className="icons">
          <button className="github">
            <FontAwesomeIcon icon={faGithub} />
            {"  "}
            Open Source
          </button>
          <button className="visitSite">Visit Site</button>
        </div>
      </div>
      <div className="task">
        <div
          onClick={() => window.open("http://www.google.com", "_blank")}
          className="nameAndIcon"
        >
          <FontAwesomeIcon
            className="faSpaceShuttle"
            icon={faSpaceShuttle}
            size="2x"
          />

          <h2>NASA Photo</h2>
        </div>
        <p>
          A simple login todo app, using redux and login with backend asd asdfa
          ja j sdjo aojd jasdoj
        </p>
        <div className="icons">
          <button className="github">
            <FontAwesomeIcon icon={faGithub} />
            {"  "}
            Open Source
          </button>
          <button className="visitSite">Visit Site</button>
        </div>
      </div>
      <div className="task">
        <div
          onClick={() => window.open("http://www.google.com", "_blank")}
          className="nameAndIcon"
        >
          <FontAwesomeIcon
            className="faSpaceShuttle"
            icon={faSpaceShuttle}
            size="2x"
          />

          <h2>NASA Photo</h2>
        </div>
        <p>
          A simple login todo app, using redux and login with backend asd asdfa
          ja j sdjo aojd jasdoj
        </p>
        <div className="icons">
          <button className="github">
            <FontAwesomeIcon icon={faGithub} />
            {"  "}
            Open Source
          </button>
          <button className="visitSite">Visit Site</button>
        </div>
      </div>
      <div className="task">
        <div
          onClick={() => window.open("http://www.google.com", "_blank")}
          className="nameAndIcon"
        >
          <FontAwesomeIcon
            className="faSpaceShuttle"
            icon={faSpaceShuttle}
            size="2x"
          />

          <h2>NASA Photo</h2>
        </div>
        <p>
          A simple login todo app, using redux and login with backend asd asdfa
          ja j sdjo aojd jasdoj
        </p>
        <div className="icons">
          <button className="github">
            <FontAwesomeIcon icon={faGithub} />
            {"  "}
            Open Source
          </button>
          <button className="visitSite">Visit Site</button>
        </div>
      </div>
    </div>
  );
};

export default Work;
