import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, displayUnit] = useState(`metric`);

  function convertToFahrenheit(event) {
    event.preventDefault();
    displayUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    displayUnit("metric");
  }

  if (unit === "metric") {
    let celsius = props.celsius;
    return (
      <div className="WeatherTemperature">
        <span className="temp">{Math.round(celsius)}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C{" "}
          </a>{" "}
          |
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temp">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  }
}
