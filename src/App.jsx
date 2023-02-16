import React from "react";
import "./App.css";
import Experience from "./Experience/Experience";
import { useEffect, useRef } from "react";
import useMediaQuery from "./Experience/Utils/useMediaQuery";
import { ReactComponent as Sun } from "./assets/sun.svg";
import { ReactComponent as Moon } from "./assets/moon.svg";
import { ReactComponent as MouseScroll } from "./assets/mouse-scroll.svg";
import { ReactComponent as FingerScroll } from "./assets/finger-scroll.svg";
import { ReactComponent as LinkedIn } from "./assets/linkedin.svg";
import { ReactComponent as Github } from "./assets/github.svg";
import { ReactComponent as Gmail } from "./assets/gmail.svg";

function App() {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  useEffect(() => {
    const experience = new Experience(
      document.querySelector(".experience-canvas")
    );
  });

  return (
    <div asscroll-container="true">
      <div className="experience">
        <canvas className="experience-canvas"></canvas>
      </div>

      {/* Preloader */}
      <div className="preloader">
        <div className="preloader-wrapper">
          <div className="loading">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      </div>

      <div className="page">
        <div className="toggle-bar">
          <div className="sun-wrapper">
            <Sun />
          </div>
          <button className="toggle-button">
            <div className="toggle-circle"></div>
          </button>
          <div className="moon-wrapper">
            <Moon />
          </div>
        </div>

        <div className="page-wrapper" asscroll="true">
          <section className="hero">
            <div className="hero-wrapper">
              {/* Intro */}
              <div className="intro-text">Welcome to my portfolio!</div>
              <div className="scroll-svg-wrapper">
                {isDesktop ? <MouseScroll /> : <FingerScroll />}
              </div>
              <div className="hero-main">
                <h1 className="hero-main-title">AN TRIEU</h1>
                <p className="hero-main-desc">
                  Software Engineer | Graphic Designer
                </p>
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
              <h3 className="section-heading">Who am I?</h3>
              <p className="section-text">
                Hi there! My name is An and I am thrilled to introduce myself as
                a creative and skilled software engineer, graphic designer, and
                musician. I am passionate about technology, design, and music,
                and I strive to bring my unique perspectives to every project I
                work on.
              </p>
              <h3 className="section-heading">Software Engineer?</h3>
              <p className="section-text">
                I am a software engineer with a passion for solving complex
                problems and delivering top-quality results. I truly believe in
                the power of the creative process and always approach each task,
                whether it be coding a complex solution or working on a new
                project, with a positive attitude and a love for excellence. My
                favorite projects are those that allow me to get creative and
                bring animations or 3D assets to life in a website or
                application. And the best part? I am capable of both front-end
                and back-end development, which means I have a strong
                understanding of both the visual aspects of a website or
                application and the technical aspects that make it all work
                seamlessly. Whether it's developing user-friendly interfaces or
                creating efficient back-end systems, I am confident in my
                ability to bring both form and function to any project. I am
                truly a full-stack software engineer and I am excited to bring
                my skills and experience to your next project!
              </p>
              <h3 className="section-heading">Graphic Designer?</h3>
              <p className="section-text">
                I am a graphic designer with a passion for creating visually
                appealing and user-friendly designs. I take pride in my keen eye
                for detail and my commitment to delivering outstanding results.
                With a deep understanding of design principles, color theory,
                and typography, I am confident in my ability to bring your ideas
                to life. From logos to websites to digital assets, I have
                experience working on a variety of design projects and am always
                eager to take on new challenges and push my limits as a
                designer. Let's create something amazing together!
              </p>
              <h3 className="section-heading">Musician?</h3>
              <p className="section-text">
                Music has always been a big part of my life, and I am thrilled
                to share my passion for it with you. I have a strong background
                in music theory and composition, and I am proficient in playing
                both the guitar and saxophone, with a focus on jazz. My love for
                music has given me a unique and well-rounded perspective that I
                bring to my work as a software engineer and graphic designer.
                Whether I am composing a beautiful piece of music or working on
                a project, I approach each task with a passion for excellence
                and a commitment to delivering meaningful and impactful results.
                Let's make some beautiful music together!
              </p>
              <h3 className="section-heading">Anything Else?</h3>
              <p className="section-text">
                I am an international student from Vietnam, fluent in Vietnamese
                and Chinese, and Ultimate Frisbee player. I bring a unique and
                well-rounded perspective to projects and challenges. I am always
                looking for opportunities to grow and deliver outstanding
                results.
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
                <span className="section-title-text pink-text">
                  My Experience
                </span>
                <div className="section-title-decoration styleOne pink-border"></div>
                <div className="section-title-decoration styleTwo pink-border"></div>
                <div className="section-title-decoration styleThree pink-background pink-border"></div>
              </h1>
              <span className="section-number pink-text">02</span>
            </div>
            <div className="section-detail-wrapper">
              <h3 className="section-heading">
                Full-stack Developer Internship @ the Bubble
              </h3>
              <ul className="section-text">
                <li>
                  Developed and maintained the main website of the company using
                  HTML, CSS, JavaScript, and React.
                </li>
                <li>
                  Designed and implemented high usability motion design with
                  animations to enhance the user experience.
                </li>
                <li>
                  Developed and set up the backend server using MongoDB,
                  ensuring efficient data management and retrieval.
                </li>
                <li>
                  Worked with a team of designers and front-end developers to
                  integrate the website with various APIs and third-party tools.
                </li>
                <li>
                  Conducted user testing and gathered feedback to continuously
                  improve the website's functionality and performance.
                </li>
              </ul>
              <h3 className="section-heading">
                Full-stack Developer and UI/UX Designer @ Chosn
              </h3>
              <ul className="section-text">
                <li>
                  Developed and maintained features for the Relationship App
                  using Javascript, React, and AWS Amplify with DynamoDB.
                </li>
                <li>
                  Designed user-friendly interface for the application,
                  improving the user experience.
                </li>
                <li>
                  Participated in code reviews and bug fixing to ensure high
                  quality and performance
                </li>
                <li>
                  Collaborated with a cross-functional team of developers,
                  designers, and product managers to deliver high-quality
                  solutions.
                </li>
              </ul>
              <h3 className="section-heading">
                Computer Science Teaching Assistant and Tutor @ Knox College
              </h3>
              <ul className="section-text">
                <li>
                  Provide students with explanations and examples of problems
                  they encountered and support them in finding solutions for all
                  undergraduate academic levels courses
                </li>
                <li>
                  Assisting professors in delivering course material, grading
                  course assignments, and giving feedback to students for
                  improvement on their works.
                </li>
                <li>
                  Develop and support a friendly and effective environment for
                  teaching and learning.
                </li>
              </ul>
            </div>
          </section>

          <div className="third-move section-margin"></div>

          <section className="third-section section left">
            <div className="progress-wrapper progress-bar-wrapper-left">
              <div className="progress-bar brown-background"></div>
            </div>
            <div className="section-intro-wrapper brown-text brown-border">
              <h1 className="section-title brown-text brown-border brown-border">
                <span className="section-title-text brown-text">
                  My Projects
                </span>
                <div className="section-title-decoration styleOne brown-border"></div>
                <div className="section-title-decoration styleTwo brown-border"></div>
                <div className="section-title-decoration styleThree brown-background brown-border"></div>
              </h1>
              <span className="section-number brown-text">03</span>
            </div>
            <div className="section-detail-wrapper">
              <h3 className="section-heading">
                <a href="https://xjournal.work/issues" target="_blank">
                  X Journal
                </a>
              </h3>
              <ul className="section-text">
                <li>
                  Maintain the Xjournal website, design and develop the project
                  for visual art submission of Knox College using Vue.js.
                </li>
                <li>
                  Improve data organization of all the artwork submission by
                  creating and deploying a back-end server using Express.js and
                  MongoDb.
                </li>
                <li>
                  This project is used for the purpose of creating a friendly environment and opportunities for students to share their visual art work.
                </li>
              </ul>
              <h3 className="section-heading">
                <a href="https://knoxalotl.profkaz.page/home" target="_blank">
                  Knox Graph-Database
                </a>
              </h3>
              <ul className="section-text">
                <li>
                  Provide students of Knox College with a new database and
                  website, which saves 50% of the time in searching for a
                  specific resource that they need by utilizing the database
                  organization and search engine using keyword tokens.
                </li>
                <li>
                  Using Machine Learning to classify publications, NLP with
                  Spacy and BeautifulSoup, JSON for data processing.
                </li>
                <li>
                  This project is used for the purpose of creating an convenient and high usability environment in order to help students with their courses registration during the registration period.
                </li>
              </ul>
              <h3 className="section-heading">
                <a href="https://nmr-anchao0207.vercel.app/" target="_blank">
                  NMR Project
                </a>
              </h3>
              <ul className="section-text">
                <li>
                  Develop a React front-end website run on a touchscreen and
                  hosted by a raspberry pi server with connection to trigger
                  light instances on the NMR machine by a Python Flask backend
                  server.
                </li>
                <li>
                  Using GSAP library to create smooth transitioning effect
                  between pages and elements.
                </li>
                <li>
                  This project is used for the purpose of educating students with the structure of the NMR machine use in Chemistry.
                </li>
              </ul>
            </div>
          </section>

          <div className="fourth-move section-margin"></div>

          <section className="fourth-section section right">
            <div className="progress-wrapper progress-bar-wrapper-right">
              <div className="progress-bar green-background"></div>
            </div>
            <div className="section-intro-wrapper green-text green-border">
              <h1 className="section-title green-text green-border green-border">
                <span className="section-title-text green-text">
                  Contact Me
                </span>
                <div className="section-title-decoration styleOne green-border"></div>
                <div className="section-title-decoration styleTwo green-border"></div>
                <div className="section-title-decoration styleThree green-background green-border"></div>
              </h1>
              <span className="section-number green-text">04</span>
            </div>
            <div className="section-detail-wrapper">
              <h3 className="section-heading">LinkedIn</h3>
              <p className="section-text">
                <LinkedIn />
              </p>
              <a
                href="https://www.linkedin.com/in/an-trieu-330a69202/"
                target="_blank"
                className="section-text"
              >
                https://www.linkedin.com/in/an-trieu-330a69202/
              </a>
              <h3 className="section-heading">Github</h3>
              <p className="section-text">
                <Github />
              </p>
              <a
                href="https://github.com/anchao0207"
                target="_blank"
                className="section-text"
              >
                https://github.com/anchao0207
              </a>
              <h3 className="section-heading">Gmail</h3>
              <p className="section-text">
                <Gmail />
              </p>
              <a href="mailto: atrieu@knox.edu" className="section-text">
                atrieu@knox.edu
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
