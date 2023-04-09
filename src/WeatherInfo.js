import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <span>
              <FormattedDate date={props.data.date} />
            </span>
          </li>
          <li>
            <span>{props.data.description}</span>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="Flexbox weather-temperature">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="humidity">
            <ul>
              <li>
                <span>Humidity: {props.data.humidity}%</span>
              </li>
              <li>
                <span>Wind speed: {Math.round(props.data.wind)} km/h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
