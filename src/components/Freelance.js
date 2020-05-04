import React from "react";
import modernizeme from "./modernizeme.PNG";

const Freelance = () => {
  return (
    <div className="freelance" id="freelance">
      <h1>Modernize Me</h1>
      <p>
        ModernizeMe is a freelance agency I created that provides quality yet
        affordable web solutions. Feel free to check out some of the work I have
        done, including farms, wedding services and hotels. If you have any
        questions, you can reach out on my freelance website or at the contact
        section here!
      </p>
      <div>
        <img
          onClick={() => window.open("https://modernizeme.com/", "_blank")}
          src={modernizeme}
          className="modernize img-shadow-1"
          alt="ModernizeMe logo, create affordable digital content"
        />
      </div>
    </div>
  );
};

export default Freelance;
