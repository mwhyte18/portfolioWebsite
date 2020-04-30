import React, { useEffect, Component } from "react";

export default class Navbar extends Component {
  state = {
    scrolled: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.navOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.navOnScroll);
  }

  navOnScroll = () => {
    if (window.scrollY > 20) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };
  render() {
    const { scrolled } = this.state;
    return (
      <nav className={scrolled ? "nav scroll" : "nav"}>
        <div className="nav-container">
          <div className="brand">
            <a href="/">
              <span className="text">Marco Whyte</span>
            </a>
          </div>
          <div className="links">
            <a href="/#about">About Me</a>
            <a href="/#work">My Work</a>
            <a href="/#freelance">Freelance</a>
            <a className="contactlink" href="/contact">
              Contact
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
