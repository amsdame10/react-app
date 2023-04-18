import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature fw-bold">
        {Math.round(props.fahrenheit)}
      </span>
      <span className="unit fw-bold">°F</span>
    </div>
  );
}
