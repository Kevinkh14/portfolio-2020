import React, { Component } from "react";
import "../css/Projects.css";

export default class Header extends Component {
  render() {
    return (
      <div className="contact" id="contact">
        <div className="ctc-header">
          <h1>Feel free to contact me for any work or suggestions below</h1>
        </div>
        <div className="ctc-info">
          <h1>Email: Kevin.hernandez1802@Gmail.com</h1>
          <h1>Phone: 2149096343</h1>
          <div className = "socials2">
            <a
              href="https://www.linkedin.com/in/kevinhernandez14/"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Kevinkh14" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
