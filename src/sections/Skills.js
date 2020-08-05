import React from "react";
import css from "../images/css.png";
import git from "../images/git.png";
import html5 from "../images/html5.png";
import js from "../images/js.png";
import python from "../images/python.png";
import react from "../images/react.png";
import reactnative from "../images/reactnative.png";
import redux from "../images/redux.png";
import sass from "../images/sass.png";
import sql from "../images/SQL.png";
import ts from "../images/ts.png";
import node from "../images/node.png";

const Skills = (props) => {
  return (
    <div id="skills">
      <h1>My Top Skills</h1>

      <div className="skills">
        <div
          className="skill"
          onClick={() =>
            window.open(
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              "_blank"
            )
          }
        >
          <img src={js} alt="javascript" className="skillIcon" />
          <p>Javascript</p>
        </div>
        <div
          className="skill"
          onClick={() =>
            window.open("https://www.typescriptlang.org/", "_blank")
          }
        >
          <img src={ts} alt="typescript" className="skillIcon" />
          <p>Typescript</p>
        </div>
        <div
          className="skill"
          onClick={() => window.open("https://reactjs.org/", "_blank")}
        >
          <img src={react} alt="react" className="skillIcon" />
          <p>React</p>
        </div>
        <div
          className="skill"
          onClick={() => window.open("https://redux.js.org/", "_blank")}
        >
          <img src={redux} alt="redux" className="skillIcon" />
          <p>Redux</p>
        </div>
        <div
          className="skill"
          onClick={() => window.open("https://nodejs.org/en/", "_blank")}
        >
          <img src={node} alt="node" className="skillIcon" />
          <p>Node</p>
        </div>
        <div
          className="skill"
          onClick={() => window.open("https://sass-lang.com/", "_blank")}
        >
          <img src={sass} alt="sass" className="skillIcon" />
          <p>Sass</p>
        </div>

        <div
          className="skill"
          onClick={() =>
            window.open(
              "https://developer.mozilla.org/en-US/docs/Web/CSS",
              "_blank"
            )
          }
        >
          <img src={css} alt="css" className="skillIcon" />
          <p>CSS</p>
        </div>
        <div
          className="skill"
          onClick={() => window.open("https://git-scm.com/", "_blank")}
        >
          <img src={git} alt="git" className="skillIcon" />
          <p>Git</p>
        </div>
        <div
          className="skill"
          onClick={() => window.open("https://reactnative.dev/", "_blank")}
        >
          <img src={reactnative} alt="reactnative" className="skillIcon" />
          <p>React Native</p>
        </div>
        <div
          className="skill"
          onClick={() => window.open("https://www.python.org/", "_blank")}
        >
          <img src={python} alt="python" className="skillIcon" />
          <p>Python</p>
        </div>
        <div
          className="skill"
          onClick={() =>
            window.open(
              "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
              "_blank"
            )
          }
        >
          <img src={html5} alt="html5" className="skillIcon" />
          <p>HTML5</p>
        </div>
        <div
          className="skill"
          onClick={() =>
            window.open("https://www.sqlite.org/index.html", "_blank")
          }
        >
          <img src={sql} alt="SQL" className="skillIcon" />
          <p>SQL</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
