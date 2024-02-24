import { useEffect, useState } from "react";
import "./index.css";

export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let InterValid;
    if (isRunning) {
      InterValid = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    } else {
      clearInterval(InterValid);
    }
    return () => clearInterval(InterValid);
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const reset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };
  const startStop = () => {
    setIsRunning(!isRunning);
  };
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(elapsedTime)}</p>
      <button onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}