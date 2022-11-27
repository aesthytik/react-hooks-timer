import { useTimer } from "./hooks/useTimer";

export default function App() {
  const { seconds, start, pause, running, stop } = useTimer();

  return (
    <div className="App">
      <h1>Timer</h1>
      <div className="counter-container">
        <button className="start-button" onClick={start}>
          {running ? "pause" : "start"}
        </button>
        <button className="stop-button" onClick={stop}>
          stop
        </button>

        <button className="stop-button" onClick={stop}>
          reset
        </button>
        <p id="counter">{seconds}</p>
      </div>
    </div>
  );
}
