import React, { Component } from "react";
import "../css/Header.css"

export default class Header extends Component {
  render() {
    return (
      <header className = "header">
        <div className = "top-menu">
          <ul className = "menu-list">
            <l1>HOME</l1>
            <l2>ABOUT</l2>
            <l3>RESUME</l3>
            <l4>PROJECTS</l4>
            <l5>CONTACT</l5>
          </ul>
        </div>
        <div className = "home">
            <h1 className = "name">Kevin Hernandez.</h1>
            <h2 className = "position">Web Developer</h2>
        </div>
        <img className = "home-img"  src = "https://www.setaswall.com/wp-content/uploads/2017/03/Macbook-Apple-Computer-Wallpaper-1920x1080.jpg"/>
      </header>
    );
  }
}
