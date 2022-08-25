import React, { Component } from "react";
import "../css/Header.css";

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      menuOpenStatus: 'side-menu'
    }
  }
  toggle = () => {
    if (this.state.menuOpenStatus === "side-menu-close" || this.state.menuOpenStatus === "side-menu") {
      this.setState({ menuOpenStatus: "side-menu-open" });
    }
    else if (this.state.menuOpenStatus === "side-menu-open") {
      this.setState({ menuOpenStatus: "side-menu-close" })
    }
  }
  render() {
    return (
      <header className="header" id="home">
        <div className="top-menu">
          <ul className="menu-list">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#resume">RESUME</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
          <div className={`${this.state.menuOpenStatus} hidden-by-default`}>   <ul className="menu-list1">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#resume">RESUME</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul></div>
          <i class="fas fa-bars" id="ham" onClick={this.toggle}></i>
        </div>
        <div className="home">
          <h1 className="name">Kevin Hernandez.</h1>
          <h2 className="position">Web Developer</h2>
        </div>
        <div className="socials">
          <a href="https://www.linkedin.com/in/kevinhernandez14/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
          <a href="https://github.com/Kevinkh14" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
        </div>
        <img
          alt="background"
          className="home-img"
          src="/images/background.jpg"
        />
      </header>
    );
  }
}
