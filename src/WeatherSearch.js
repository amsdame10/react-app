import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "2d96d64425dca1d6eda00d942a281c0d";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showWeather);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="enter city" onChange={changeCity} />
      <input type="submit" value="search" />
    </form>
  );

  if (loaded) {
    return (
      <div className="Search">
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}ºF </li>
          <li>Description: {weather.description} </li>
          <li>Humidity: {Math.round(weather.humidity)}% </li>
          <li>Wind: {Math.round(weather.wind)}mph </li>
          <li>
            <img src={weather.icon} alt={weather.description} />{" "}
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
