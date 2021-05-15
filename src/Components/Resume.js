import React, { Component } from "react";
import "../css/Resume.css";

export default class Header extends Component {
  render() {
    return (
      <div className="resume">
        <section id = "resume" className="res-sec">
          <div>
            <h1 id = 'education'>Education</h1>
          </div>
          <div className="edu-info">
            <h1 id="school">Devmountain</h1>
            <p>Web development bootcamp • August-November 2019</p>
            <p>
              -This was a 3 month intensive web development bootcamp. Here
              students learn how to develop a full stack application in a very
              fast paced environment. Student start out learing th basics of
              javaScript and HTML after about 4 weeks we start on React. At this
              point student are expected to create a 3/4 stack application. By
              the 7th week students start on their full stack application and
              are expected to finish in two weeks. This application was built on
              React / Redux, styled using HTML CSS/SCSS and the backend is built
              on Node.js and all data is stored in a SQL datbase.
            </p>
          </div>
        </section>
        <section className="res-sec">
          <div>
            <h1 id = 'work'>Work</h1>
          </div>
          <div className="edu-info">
            <h1 id="school">Worp.Space</h1>
            <p>
              Forum website where people can make posts on a specific topic and
              share it with people with similar interests.• October 2019
            </p>
            <p>-Individual project.Completed in 2 weeks.</p>
            <p>
              -Learned three new technologies while completing this project
              which included Sass/Scss, Cloudinary, and NodeMailer.
            </p>
          </div>
          <div className="edu-info">
            <h1 id="school">Trakd.net</h1>
            <p>
              Trakd is a website where users can track their calorie intake and
              the other things like carbs, fat and protein.• October 2019
            </p>
            <p>-Group Project. Completed in 2 weeks..</p>
            <p>
              -Learned new technology chartjs and implemented cloudinary
              nodemailer and an external food api (Edamam).
            </p>
          </div>
        </section>
        <section className="res-sec">
          <div>
            <h1 className = 'skill'>Skills</h1>
            <p className = "skills">HTML5 <i class = "fab fa-html5"></i> CSS<i class = "fab fa-fab fa-css3-alt"></i>  JAVASCRIPT <i class = "fab fa-js"></i>  REACTJS<i class = "fab fa-react"></i>  NODEJS<i class = "fab fa-node"></i>  EXPRESSJS<i class = "fas fa-server"></i>  SQL<i class = "fas fa-database"></i> </p>
          </div>
          <div className="edu-info"></div>
        </section>
      </div>
    );
  }
}
