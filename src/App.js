import React from "react";
import Weather from "./Weather";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <div className="container-fluid p-2 weather-holder">
        <Weather defaultCity="Seattle" />

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
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
