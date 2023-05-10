import React, { useState, useEffect } from "react";
import Line from "./Line";
import "./styles.css";
import "./tailwind.output.css";
// window.addEventListener(action, callback);
const API_URL = "https://mocki.io/v1/ebce1041-bbf5-4b00-9e16-0dbd92c70a19";

export default function App() {
  const [word, setWord] = useState("");
  useEffect(() => {
    const fetchSolution = async () => {
      //api logic
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        const index = parseInt(Math.random() * data.length, 10);
        // console.log(index);
        setWord(data[index]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSolution();
  }, []);

  // window.addEventListener("keydown", listener);
  let handleKeyDown = (e) => {
    console.log(e);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="board">
      <Line word={word} />
      {/* <Line word={word} />
      <Line word={word} />
      <Line word={word} />
      <Line word={word} />
      <Line word={word} /> */}
    </div>
  );
}
