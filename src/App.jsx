import "./App.css";
import Experience from "./Experience/Experience";
import { useEffect, useRef } from "react";

function App() {
  useEffect(()=>{
    const experience = new Experience(document.querySelector(".experience-canvas"))
  })
  return (
    <div className="experience">
      <canvas className="experience-canvas"></canvas>
    </div>
  );
}

export default App;
