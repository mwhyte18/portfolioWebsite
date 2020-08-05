import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { faGrinBeam } from "@fortawesome/free-solid-svg-icons";

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
            <h2
              onClick={() =>
                window.open("https://www.searchify.club", "_blank")
              }
            >
              Searchify
            </h2>
          </div>
          <p>
            Explore music, see what music you enjoy and create playlists based
            off those songs!<br></br>{" "}
            <span style={{ fontSize: 14 }}>*Requires a spotify account</span>
          </p>

          <div className="workButtons">
            <button
              className="github"
              onClick={() =>
                window.open("https://github.com/marwhyte/spotifysuggester")
              }
            >
              <FontAwesomeIcon icon={faGithub} />
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
        <div className="card">
          <div className="cardTextTogether">
            <div className="titleAndIcon">
              <FontAwesomeIcon
                className="faShield"
                icon={faShieldAlt}
                size="2x"
              />
              <h2
                onClick={() =>
                  window.open("https://hirecontributors.club", "_blank")
                }
              >
                HireContributors
              </h2>
            </div>
            <p>
              Hire people that helped build your codebase and contact them
              quickly with a customizable email template.
              <br></br>
              <span style={{ fontSize: 14 }}>
                TypeScript | React-Redux | Node.js
              </span>
            </p>
          </div>
          <div className="workButtons">
            <button
              className="github"
              onClick={() =>
                window.open(
                  "https://github.com/marwhyte/packageJSONemployer",
                  "_blank"
                )
              }
            >
              <FontAwesomeIcon icon={faGithub} />
              {"  "}
              Open Source
            </button>
            <button
              className="visitSite"
              onClick={() =>
                window.open("https://hirecontributors.club", "_blank")
              }
            >
              Visit Site
            </button>
          </div>
        </div>
        <div className="card">
          <div className="titleAndIcon">
            <FontAwesomeIcon
              className="clipboard"
              icon={faClipboardList}
              size="2x"
            />
            <h2
              onClick={() =>
                window.open("https://www.pleasanttodos.club", "_blank")
              }
            >
              PleasantTodos
            </h2>
          </div>
          <p>
            An aesthetically pleasing todo app, which saves all your tasks to
            your browser.
          </p>

          <div className="workButtons">
            <button
              className="github"
              onClick={() =>
                window.open("https://github.com/marwhyte/pleasantTodos")
              }
            >
              <FontAwesomeIcon icon={faGithub} />
              {"  "}
              Open Source
            </button>
            <button
              className="visitSite"
              onClick={() =>
                window.open("https://www.pleasanttodos.club", "_blank")
              }
            >
              Visit Site
            </button>
          </div>
        </div>
        <div className="card">
          <div className="cardTextTogether">
            <div className="titleAndIcon">
              <FontAwesomeIcon
                className="faLaptopCode red"
                icon={faHeartbeat}
                size="2x"
              />
              <h2
                onClick={() =>
                  window.open(
                    "https://hungry-varahamihira-3e8934.netlify.app/",
                    "_blank"
                  )
                }
              >
                Game of Life
              </h2>
            </div>
            <p>
              A react app that simulates Connway's Game of Life, where cells
              live or die based off of their neighbors.
            </p>
          </div>
          <div className="workButtons">
            <button
              className="github"
              onClick={() =>
                window.open(
                  "https://github.com/marwhyte/buildWeek1CS",
                  "_blank"
                )
              }
            >
              <FontAwesomeIcon icon={faGithub} />
              {"  "}
              Open Source
            </button>
            <button
              className="visitSite"
              onClick={() =>
                window.open(
                  "https://hungry-varahamihira-3e8934.netlify.app/",
                  "_blank"
                )
              }
            >
              Visit Site
            </button>
          </div>
        </div>
        <div className="card">
          <div className="cardTextTogether">
            <div className="titleAndIcon">
              <FontAwesomeIcon
                className="faSpaceShuttle"
                icon={faSpaceShuttle}
                size="2x"
              />
              <h2
                onClick={() =>
                  window.open("https://www.searchify.club", "_blank")
                }
              >
                Explore Space
              </h2>
            </div>
            <p>
              Experience Nasa's photo of the data with a user friendly
              interface.
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

        <div className="card">
          <div className="cardTextTogether">
            <div className="titleAndIcon">
              <FontAwesomeIcon
                className="faSpaceShuttle yellow"
                icon={faGrinBeam}
                size="2x"
              />
              <h2>Portfolio</h2>
            </div>
            <p>My portfolio, made with react and styled with scss.</p>
          </div>
          <div className="workButtons">
            <button
              className="github"
              onClick={() =>
                window.open(
                  "https://github.com/marwhyte/portfolioWebsite",
                  "_blank"
                )
              }
            >
              <FontAwesomeIcon icon={faGithub} />
              {"  "}
              Open Source
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
