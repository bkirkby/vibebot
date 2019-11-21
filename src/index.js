import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import ComicStrip from "./components/ComicStrip";

import "./styles.css";

function App() {
  const [images] = useState([
    { file: "img/vibebot0.jpg", alt: "it is time" },
    { file: "img/vibebot1.jpg", alt: "your vibes are under inspection" },
    { file: "img/vibebot2.jpg", alt: "remain still" },
    { file: "img/vibebot3.jpg", alt: "taking sunglasses off" },
    { file: "img/vibebot4.jpg", alt: "scanning your vibes" },
    { file: "img/vibebot5.jpg", alt: "scanning your vibes stronger" },
    { file: "img/vibebot6.jpg", alt: "scanning your vibes strongest" },
    { file: "img/vibebot7.jpg", alt: "well, the results are in" },
    { file: "img/vibebot8.jpg", alt: "AND YOU" },
    {
      file: "img/vibebot9.jpg",
      alt: "straight up passed the test dog! keep up those positive vibes!"
    }
  ]);

  useEffect(() => {
    images.forEach(image => {
      const img = new Image();
      img.src = image.file;
    });
  }, []);

  return (
    <div className="App">
      <h1>VibeBot 4000</h1>
      <div>
        <ComicStrip panelImgs={images} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
