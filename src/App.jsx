import "./App.css";
import Experience from "./Experience/Experience";
import { useEffect, useRef } from "react";

function App() {
  useEffect(() => {
    const experience = new Experience(
      document.querySelector(".experience-canvas")
    );
  });
  return (
    <>
      <div className="experience">
        <canvas className="experience-canvas"></canvas>
      </div>

      <div className="page">
        <div className="page-wrapper">
          <section className="hero">
            <div className="hero-wrapper">
              <div className="hero-main">
                <h1 className="hero-main-title">AN TRIEU</h1>
                <p className="hero-main-desc">DECS</p>
              </div>

              <div className="hero-second">
                <p className="hero-second-subheading">An Trieu</p>
                <p className="hero-second-subheading">Portfolio</p>
              </div>
            </div>
          </section>

          <div className="section-margin"></div>

          <section className="first-section section left">
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

          <div className="section-margin"></div>

          <section className="second-section section right">
            <div className="section-intro-wrapper">
              <h1 className="section-title">
              <span className="section-title-text">My Work</span>
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
        </div>
      </div>
    </>
  );
}

export default App;
