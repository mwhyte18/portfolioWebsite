import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";

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
            Explore music, see what music you enjoy and create playlists based
            off those songs!<br></br>{" "}
            <span style={{ fontSize: 14 }}>*Requires a spotify account</span>
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
        <div className="card colorPurple">
          <div className="cardTextTogether">
            <div className="titleAndIcon">
              <FontAwesomeIcon
                className="faShield"
                icon={faShieldAlt}
                size="2x"
              />
              <h2>HireContributors</h2>
            </div>
            <p>
              Hire people that helped build your codebase and create a single
              customized email template for each contributor.
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
                window.open("https://hirecontributors.club", "_blank")
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
            <h2>PleasantTodos</h2>
          </div>
          <p>
            An aesthetically pleasing todo app, which saves all your tasks to
            your browser.
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
                window.open("https://www.pleasanttodos.club", "_blank")
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
                icon={faHeartbeat}
                size="2x"
              />
              <h2>Game of Life</h2>
            </div>
            <p>
              A react app that simulates Connway's Game of Life, where cells
              live or die based off of their neighbors.
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
        <div className="card colorBlue">
          <div className="cardTextTogether">
            <div className="titleAndIcon">
              <FontAwesomeIcon
                className="faSpaceShuttle"
                icon={faSpaceShuttle}
                size="2x"
              />
              <h2>Explore Space</h2>
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

        <div className="card colorBlue">
          <div className="cardTextTogether">
            <div className="titleAndIcon">
              <FontAwesomeIcon
                className="faSpaceShuttle"
                icon={faHeartbeat}
                size="2x"
              />
              <h2>Explore Space</h2>
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
