import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    window.addEventListener("scroll", resizeNavOnScroll);
  });

  function resizeNavOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 60,
      navbarEl = document.getElementById("js-navbar");

    if (distanceY >= shrinkOn) {
      navbarEl.classList.add("smaller");
    } else if (distanceY < shrinkOn) {
      navbarEl.classList.remove("smaller");
    }
  }

  return (
    <div className="nav" id="js-navbar">
      <div className="name">
        <a href="/">Marco Whyte</a>
      </div>
      <div className="navlinks">
        <a href="/#about">About Me</a>
        <a href="/#work">My Work</a>
        <a href="/#freelance">Freelance</a>
        <a className="contactlink" href="/contact">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
