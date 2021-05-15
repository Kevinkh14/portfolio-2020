import React, { Component } from "react";
import "../css/Header.css";

export default class Header extends Component {
  constructor(){
    super()
    this.state ={
      menuOpenStatus:'side-menu'
    }
  }
  toggle=()=>{
    if(this.state.menuOpenStatus ==="side-menu-close"|| this.state.menuOpenStatus ==="side-menu"){
        this.setState({menuOpenStatus: "side-menu-open"});
    }
    else if(this.state.menuOpenStatus ==="side-menu-open"){
        this.setState({menuOpenStatus:"side-menu-close"})
    }
}
  render() {
    return (
      <header className="header" id="home">
        <div className="top-menu">
          <ul className="menu-list">
            <l1>
              <a href="#home">HOME</a>
            </l1>
            <l2>
              <a href="#about">ABOUT</a>
            </l2>
            <l3>
              <a href="#resume">RESUME</a>
            </l3>
            <l4>
              <a href="#projects">PROJECTS</a>
            </l4>
            <l5>
              <a href="#contact">CONTACT</a>
            </l5>
          </ul>
          <div className ={`${this.state.menuOpenStatus} hidden-by-default`}>   <ul className="menu-list1">
            <l1>
              <a href="#home">HOME</a>
            </l1>
            <l2>
              <a href="#about">ABOUT</a>
            </l2>
            <l3>
              <a href="#resume">RESUME</a>
            </l3>
            <l4>
              <a href="#projects">PROJECTS</a>
            </l4>
            <l5>
              <a href="#contact">CONTACT</a>
            </l5>
          </ul></div>
          <i class="fas fa-bars" id = "ham" onClick = {this.toggle}></i>
        </div>
        <div className="home">
          <h1 className="name">Kevin Hernandez.</h1>
          <h2 className="position">Web Developer</h2>
        </div>
          <div className = "socials">
            <a href = "https://www.linkedin.com/in/kevinhernandez14/" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href ="https://github.com/Kevinkh14" target ="_blank"><i class="fab fa-github"></i></a>
          </div>
        <img
          className="home-img"
          src="https://www.setaswall.com/wp-content/uploads/2017/03/Macbook-Apple-Computer-Wallpaper-1920x1080.jpg"
        />
      </header>
    );
  }
}
