import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          {" "}
          <Weather defaultCity="Shiraz" />
        </div>

        <footer>
          <i class="bi bi-code-slash"></i> Coded with{" "}
          <i class="bi bi-chat-heart"></i> by nwxanin{" "}
          <a
            href="https://github.com/nwxanin/weather-react-w5"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bi bi-github"></i>
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
