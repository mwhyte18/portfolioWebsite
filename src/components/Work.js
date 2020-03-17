import React from "react";
import modernizeme from "./modernizeme.PNG";
const Work = () => {
  return (
    <div id="work">
      <h1>My Work</h1>
      <div className="myWork">
        <div className="task">
          <img src={modernizeme} alt="Mountains" class="task-layer_bottom" />
          <div className="task-layer_top">
            <div className="task-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              porttitor ligula porttitor, lacinia sapien non.
              <br></br>
              <button>Click here</button>
            </div>
          </div>
        </div>
        <div className="task">
          <img
            src={modernizeme}
            alt="Mountains"
            className="task-layer_bottom"
          />
          <div class="task-layer_top">
            <div class="task-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              porttitor ligula porttitor, lacinia sapien non.
              <br></br>
              <button>Click here</button>
            </div>
          </div>
        </div>
        <div className="task">
          <img
            src={modernizeme}
            alt="Mountains"
            className="task-layer_bottom"
          />
          <div className="task-layer_top">
            <div className="task-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              porttitor ligula porttitor, lacinia sapien non.
              <br></br>
              <button>Click here</button>
            </div>
          </div>
        </div>
        <div className="task">
          <img
            src={modernizeme}
            alt="Mountains"
            className="task-layer_bottom"
          />
          <div className="task-layer_top">
            <div className="task-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              porttitor ligula porttitor, lacinia sapien non.
              <br></br>
              <button>Click here</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
