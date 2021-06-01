import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./styles.css";

const WIDTH = 3000;
const HEIGHT = 3000;

let currentScale = 1;

function onScroll() {
  const newScale = currentScale * 1.05;
  const content = document.getElementById("content");
  const container = document.getElementById("container");
  let scrollLeft = container.scrollLeft;
  let scrollTop = container.scrollTop;

  const currentCenterX = scrollLeft + window.innerWidth / 2;
  const currentCenterY = scrollTop + window.innerHeight / 2;

  content.style.transform = `scale(${newScale})`;

  container.scrollLeft = currentCenterX * newScale - window.innerWidth / 2;
  container.scrollTop = currentCenterY * newScale - window.innerHeight / 2;
  currentScale = newScale;
}

export default function App() {
  const ref = useRef();
  useLayoutEffect(() => {
    const scrollContainer = ref.current;

    scrollContainer.scrollLeft = WIDTH / 2 - window.innerWidth / 2;
    scrollContainer.scrollTop = HEIGHT / 2 - window.innerHeight / 2;
  }, []);

  return (
    <div>
      <div ref={ref} id="container">
        <div id="content">
          <div
            className="vl"
            style={{
              position: "absolute",
              top: 1500,
              left: 1500
            }}
          ></div>
          <div
            className="hl"
            style={{
              position: "absolute",
              top: 1500,
              left: 1500
            }}
          ></div>
          <div style={{ position: "absolute", top: 1550, left: 1550 }}>
            STUFF
          </div>
          <div style={{ position: "absolute", top: 2980, left: 1500 }}>
            bottom
          </div>
          <div style={{ position: "absolute", top: 0, left: 0 }}>top-left</div>
        </div>
      </div>
      <button
        style={{ position: "absolute", top: 0, left: 100 }}
        onClick={() => onScroll()}
      >
        STUFF
      </button>
    </div>
  );
}

function onScrollCenter() {
  const newScale = currentScale * 1.05;
  const content = document.getElementById("content");
  const container = document.getElementById("container");
  let scrollLeft = container.scrollLeft;
  let scrollTop = container.scrollTop;

  const currentCenterX = scrollLeft + window.innerWidth / 2;
  const currentCenterY = scrollTop + window.innerHeight / 2;

  content.style.transform = `scale(${newScale})`;

  container.scrollLeft = currentCenterX * newScale - window.innerWidth / 2;
  container.scrollTop = currentCenterY * newScale - window.innerHeight / 2;
  currentScale = newScale;
}
