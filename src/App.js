import React, { useState, useEffect, useRef } from "react";
import Line from "./Line";
import "./styles.css";
import "./tailwind.output.css";
// https://dev.to/krisgardiner/build-wordle-in-react-1hkb
// window.addEventListener(action, callback);
const API_URL = "https://mocki.io/v1/ebce1041-bbf5-4b00-9e16-0dbd92c70a19";

export default function App() {
  const [word, setWord] = useState("");
  const [guess, setGuess] = useState([])
  
  useEffect(() => {
    const fetchSolution = async () => {
      //api logic
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        const index = parseInt(Math.random() * data.length, 10);
        setWord(data[index]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSolution();
  }, []);


  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(e.key);      
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  console.log(guess)
  return (
    <div className="board">
      {
        Array(6).fill(0).map((_, index) => (
          <Line word={word} guess={guess} key={index} />
        ))
      }
    </div>
  );
}
