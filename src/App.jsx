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

          <div className="hero">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
