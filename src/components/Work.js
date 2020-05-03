import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";

const Work = () => {
  return (
    <div className="work" id="work">
      <h1>My Work</h1>
      <div className="cards">
        <div className="card">
          <div className="titleAndIcon">
            <FontAwesomeIcon
              className="searchify"
              icon={faSearchengin}
              size="2x"
            />
            <h2>Searchify</h2>
          </div>
          <p>
            Using the spotify api, this app allows you to explore music, see
            what music you like and create new playlists based on a song you
            like.
          </p>
          <div className="workButtons">
            <button className="github">
              <FontAwesomeIcon icon={faGithub} />
              {"  "}
              Open Source
            </button>
            <button
              className="visitSite"
              onClick={() =>
                window.open("https://www.searchify.club", "_blank")
              }
            >
              Visit Site
            </button>
          </div>
        </div>

        <div className="card colorRed">
          <div className="titleAndIcon">
            <FontAwesomeIcon
              className="clipboard"
              icon={faClipboardList}
              size="2x"
            />
            <h2>Login Todo</h2>
          </div>
          <p>
            A todo app where you login, making all your tasks easily accessible.
            Uses react-redux and node.js.
          </p>

          <div className="workButtons">
            <button className="github">
              <FontAwesomeIcon icon={faGithub} />
              {"  "}
              Open Source
            </button>
            <button
              className="visitSite"
              onClick={() =>
                window.open("https://www.searchify.club", "_blank")
              }
            >
              Visit Site
            </button>
          </div>
        </div>
        <div className="card colorOrange">
          <div className="cardTextTogether">
            <div className="titleAndIcon">
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
          </div>
          <div className="workButtons">
            <button className="github">
              <FontAwesomeIcon icon={faGithub} />
              {"  "}
              Open Source
            </button>
            <button
              className="visitSite"
              onClick={() =>
                window.open("https://www.searchify.club", "_blank")
              }
            >
              Visit Site
            </button>
          </div>
        </div>
        <div className="card colorBlue">
          <div className="cardTextTogether">
            <div className="titleAndIcon">
              <FontAwesomeIcon
                className="faSpaceShuttle"
                icon={faSpaceShuttle}
                size="2x"
              />
              <h2>NASA Daily Photo</h2>
            </div>
            <p>
              View NASAs photo of the day with a beautiful interface! Learn
              about the picture/video and explore past pictures from NASA
            </p>
          </div>
          <div className="workButtons">
            <button className="github">
              <FontAwesomeIcon icon={faGithub} />
              {"  "}
              Open Source
            </button>
            <button
              className="visitSite"
              onClick={() =>
                window.open("https://www.searchify.club", "_blank")
              }
            >
              Visit Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
