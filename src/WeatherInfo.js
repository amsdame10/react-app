import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="d-flex flex-row justify-content-between">
        <div className="col-6">
          <h1 className="City">{props.data.city}</h1>
          <ul>
            <li className="text-capitalize">
              <FormattedDate date={props.data.date} /> {props.data.description}
            </li>
            <li>
              Humidity: <span className="humidity">{props.data.humidity}%</span>{" "}
              Wind: <span className="wind">{Math.round(props.data.wind)}</span>{" "}
              mph
            </li>
          </ul>
        </div>
        <div className="col-6 justify-content-center">
          <div className="temperature-container d-flex justify-content-end mt-5">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <div>
              <WeatherTemperature fahrenheit={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
