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
    <div>
      <h1>My Top Skills</h1>

      <div className="skills">
        <div className="skill">
          <img src={js} alt="javascript" className="skillIcon" />
          <p>Javascript</p>
        </div>
        <div className="skill">
          <img src={ts} alt="typescript" className="skillIcon" />
          <p>Typescript</p>
        </div>
        <div className="skill">
          <img src={react} alt="react" className="skillIcon" />
          <p>React</p>
        </div>
        <div className="skill">
          <img src={redux} alt="redux" className="skillIcon" />
          <p>Redux</p>
        </div>
        <div className="skill">
          <img src={node} alt="node" className="skillIcon" />
          <p>Node</p>
        </div>
        <div className="skill">
          <img src={sass} alt="sass" className="skillIcon" />
          <p>Sass</p>
        </div>

        <div className="skill">
          <img src={css} alt="css" className="skillIcon" />
          <p>CSS</p>
        </div>
        <div className="skill">
          <img src={git} alt="git" className="skillIcon" />
          <p>Git</p>
        </div>
        <div className="skill">
          <img src={python} alt="python" className="skillIcon" />
          <p>Python</p>
        </div>
        <div className="skill">
          <img src={html5} alt="html5" className="skillIcon" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <img src={sql} alt="SQL" className="skillIcon" />
          <p>SQL</p>
        </div>
        <div className="skill">
          <img src={reactnative} alt="reactnative" className="skillIcon" />
          <p>React Native</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
