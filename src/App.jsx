import React from 'react';
import "./App.css";
import Experience from "./Experience/Experience";
import { useEffect, useRef } from "react";
import {ReactComponent as Sun} from './assets/sun.svg';
import {ReactComponent as Moon} from './assets/moon.svg';
import {ReactComponent as MouseScroll} from './assets/mouse-scroll.svg';
import {ReactComponent as FingerScroll} from './assets/finger-scroll.svg';


function App() {
  
  useEffect(() => {
    const experience = new Experience(
      document.querySelector(".experience-canvas")
    );
  });

  return (
    <div >
      <div className="experience" asscroll-container="true">
        <canvas className="experience-canvas"></canvas>
      </div>

      <div className="page" >

        <div className="toggle-bar">
          <div className="sun-wrapper"><Sun/></div>
          <button className="toggle-button">
            <div className="toggle-circle"></div>
          </button>
          <div className="moon-wrapper"><Moon/></div>
        </div>

        <div className="page-wrapper" asscroll="true">
          <section className="hero">
            <div className="hero-wrapper">

              {/* Preloader */}
              <div className="intro-text">Welcome to my portfolio!</div>
              <div className="scroll-svg-wrapper"><MouseScroll/></div>
              <div className="hero-main">
                <h1 className="hero-main-title">AN TRIEU</h1>
                <p className="hero-main-desc">DECS</p>
              </div>

              <div className="hero-second">
                <p className="hero-second-subheading first-sub">An Trieu</p>
                <p className="hero-second-subheading second-sub">Portfolio</p>
              </div>
            </div>
          </section>

          <div className="first-move section-margin"></div>

          <section className="first-section section left">
          <div className="progress-wrapper progress-bar-wrapper-left">
              <div className="progress-bar"></div>
            </div>
            <div className="section-intro-wrapper">
              <h1 className="section-title">
                <span className="section-title-text">About Me</span>
                <div className="section-title-decoration styleOne"></div>
                <div className="section-title-decoration styleTwo"></div>
                <div className="section-title-decoration styleThree"></div>
              </h1>
              <span className="section-number">01</span>
            </div>
            <div className="section-detail-wrapper">
              <h3 className="section-heading">Lorem Ipsum</h3>
              <p className="section-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate rerum voluptas qui voluptates culpa accusantium maxime
                ea dolore expedita molestias! Quibusdam deserunt necessitatibus
                corrupti similique at numquam vitae, ab ex.
              </p>
              <h3 className="section-heading">Lorem Ipsum</h3>
              <p className="section-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate rerum voluptas qui voluptates culpa accusantium maxime
                ea dolore expedita molestias! Quibusdam deserunt necessitatibus
                corrupti similique at numquam vitae, ab ex.
              </p>
              <h3 className="section-heading">Lorem Ipsum</h3>
              <p className="section-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate rerum voluptas qui voluptates culpa accusantium maxime
                ea dolore expedita molestias! Quibusdam deserunt necessitatibus
                corrupti similique at numquam vitae, ab ex.
              </p>
            </div>
          </section>

          <div className="second-move section-margin"></div>

          <section className="second-section section right">
          <div className="progress-wrapper progress-bar-wrapper-right">
              <div className="progress-bar pink-background"></div>
            </div>
            <div className="section-intro-wrapper pink-text pink-border">
              <h1 className="section-title pink-text pink-border pink-border">
              <span className="section-title-text pink-text">My Work</span>
                <div className="section-title-decoration styleOne pink-border"></div>
                <div className="section-title-decoration styleTwo pink-border"></div>
                <div className="section-title-decoration styleThree pink-background pink-border"></div>
              </h1>
              <span className="section-number pink-text">02</span>
            </div>
            <div className="section-detail-wrapper">
              <h3 className="section-heading">Lorem Ipsum</h3>
              <p className="section-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate rerum voluptas qui voluptates culpa accusantium maxime
                ea dolore expedita molestias! Quibusdam deserunt necessitatibus
                corrupti similique at numquam vitae, ab ex.
              </p>
              <h3 className="section-heading">Lorem Ipsum</h3>
              <p className="section-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate rerum voluptas qui voluptates culpa accusantium maxime
                ea dolore expedita molestias! Quibusdam deserunt necessitatibus
                corrupti similique at numquam vitae, ab ex.
              </p>
              <h3 className="section-heading">Lorem Ipsum</h3>
              <p className="section-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate rerum voluptas qui voluptates culpa accusantium maxime
                ea dolore expedita molestias! Quibusdam deserunt necessitatibus
                corrupti similique at numquam vitae, ab ex.
              </p>
            </div>
          </section>

          <div className="third-move section-margin"></div>

          <section className="third-section section left">
            <div className="progress-wrapper progress-bar-wrapper-left">
              <div className="progress-bar brown-background"></div>
            </div>
            <div className="section-intro-wrapper brown-text brown-border">
              <h1 className="section-title brown-text brown-border brown-border">
              <span className="section-title-text brown-text">Contact Me</span>
                <div className="section-title-decoration styleOne brown-border"></div>
                <div className="section-title-decoration styleTwo brown-border"></div>
                <div className="section-title-decoration styleThree brown-background brown-border"></div>
              </h1>
              <span className="section-number brown-text">03</span>
            </div>
            <div className="section-detail-wrapper">
              <h3 className="section-heading">Lorem Ipsum</h3>
              <p className="section-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate rerum voluptas qui voluptates culpa accusantium maxime
                ea dolore expedita molestias! Quibusdam deserunt necessitatibus
                corrupti similique at numquam vitae, ab ex.
              </p>
              <h3 className="section-heading">Lorem Ipsum</h3>
              <p className="section-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate rerum voluptas qui voluptates culpa accusantium maxime
                ea dolore expedita molestias! Quibusdam deserunt necessitatibus
                corrupti similique at numquam vitae, ab ex.
              </p>
              <h3 className="section-heading">Lorem Ipsum</h3>
              <p className="section-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate rerum voluptas qui voluptates culpa accusantium maxime
                ea dolore expedita molestias! Quibusdam deserunt necessitatibus
                corrupti similique at numquam vitae, ab ex.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
