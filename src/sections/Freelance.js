import React from "react";
import modernizeme from "../images/modernizeme.PNG";
import { Link } from "react-scroll";

const Freelance = () => {
  return (
    <div className="freelance" id="freelance">
      <h1>ModernizeMe</h1>
      <p>
        <span
          className="hyperLink"
          onClick={() => window.open("https://modernizeme.club/", "_blank")}
        >
          ModernizeMe
        </span>{" "}
        is a freelance agency I created that provides quality yet affordable web
        solutions. Feel free to check out some of the work I have done,
        including medical products, wedding services and hotels. If you have any
        questions, you can reach out on my freelance website or at the contact
        section{" "}
        <Link
          activeClass=""
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          className="purp"
          duration={500}
          style={{ cursor: "pointer", padding: 0 }}
        >
          below.
        </Link>
      </p>
      <div>
        <img
          onClick={() => window.open("https://modernizeme.club/", "_blank")}
          src={modernizeme}
          className="modernize img-shadow-1"
          alt="ModernizeMe logo, create affordable digital content"
        />
      </div>
      <button
        style={{ marginTop: 50 }}
        className="submitForm"
        onClick={() => window.open("https://modernizeme.club/", "_blank")}
      >
        Visit ModernizeMe
      </button>
    </div>
  );
};

export default Freelance;
