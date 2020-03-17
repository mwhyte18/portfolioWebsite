import React from "react";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="name">
        <a href="/">Marco Whyte</a>
      </div>
      <div className="navlinks">
        <a href="/#about">About Me</a>
        <a href="/#work">My Work</a>
        <a className="contactlink" href="/contact">
          Contact
        </a>
        <button className="darkmode">change</button>
      </div>
    </div>
  );
};

export default Navbar;
