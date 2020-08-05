import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { faGrinBeam } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Work = () => {
  return (
    <div className="work" id="work">
      <h1>My Work</h1>
      <p>
        {" "}
        Personal Projects:{" "}
        <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
      </p>

      <div className="cards">
        <div className="card">
          <FontAwesomeIcon icon={faStar} className="topRightStar" />
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
            Serves you the best playlists based on your favorite tracks!{" "}
            <br></br>{" "}
            <span style={{ fontSize: 14, color: "#6457db" }}>
              *Requires a spotify account <br></br>
              React - Node - SASS
            </span>{" "}
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
          <FontAwesomeIcon icon={faStar} className="topRightStar" />

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
              Hire people that helped make your codebase possible and contact
              them efficiently.
              <br></br>
              <span style={{ fontSize: 14, color: "#6457db" }}>
                Typescript - React - Node - Redux
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
          <div className="cardTextTogether">
            <div className="titleAndIcon">
              <FontAwesomeIcon
                className="faSpaceShuttle"
                icon={faUserFriends}
                size="2x"
              />
              <h2
                onClick={() =>
                  window.open("https://www.connectourkids.org/", "_blank")
                }
              >
                Connect Our Kids
              </h2>
            </div>
            <p>
              Helps Social Workers match foster children to homes by connecting
              them with extended family <br></br>
              <span style={{ fontSize: 14, color: "#6457db" }}>
                Typescript - Redux - React Native
              </span>
            </p>
          </div>
          <div className="workButtons">
            <button
              className="github"
              onClick={() =>
                window.open(
                  "https://github.com/connect-our-kids/mobile-app",
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
                window.open("https://www.connectourkids.org/", "_blank")
              }
            >
              Visit Site
            </button>
          </div>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faStar} className="topRightStar" />

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
            An aesthetically pleasing todo app, that saves all your tasks to
            your browser.
            <br></br>
            <span style={{ fontSize: 14, color: "#6457db" }}>React - SASS</span>
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
          <FontAwesomeIcon icon={faStar} className="topRightStar" />

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
              Simulates Connway's Game of Life, where cells live or die based
              off of their neighbors.
              <br></br>
              <span style={{ fontSize: 14, color: "#6457db" }}>
                Javascript | React | SASS
              </span>
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
          <FontAwesomeIcon icon={faStar} className="topRightStar" />

          <div className="cardTextTogether">
            <div className="titleAndIcon">
              <FontAwesomeIcon
                className="faSpaceShuttle yellow"
                icon={faGrinBeam}
                size="2x"
              />
              <h2>Portfolio</h2>
            </div>
            <p>
              This site, fully developed and styled.
              <br></br>
              <span style={{ fontSize: 14, color: "#6457db" }}>
                React | SASS
              </span>
            </p>
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
