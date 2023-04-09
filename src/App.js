import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Weather Search Engine!</h1>
        <Weather />
      </header>
      <footer>
        This project was coded by Andrea Smith and is open-sourced on{" "}
        <a
          href="https://github.com/amsdame10/react-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub{" "}
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://deft-sherbet-f9cb0a.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
