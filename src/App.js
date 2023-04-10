import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is{" "}
          <a
            href="https://github.com/nwxanin/weather-react-w5"
            target="_blank"
            rel="noreferrer"
          >
            Open-Source
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
