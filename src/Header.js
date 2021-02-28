import axios from "axios";
import React, { useState } from "react";
import FormattedDate from "./FormattedDate";

export default function Header(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSubmit(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "f7a9e1edb73d350092c9960e10136d73";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app">
          <div className="row align-items-center justify-content-center">
            <div className="col">
              <form id="searchForm">
                <div className="form">
                  <input
                    type="search"
                    placeholder="Search city"
                    autocomplete="off"
                  />
                  <div className="col-3">
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-primary w-100"
                      id="search-button"
                    />
                  </div>
                </div>
              </form>
              <p className="temperature">
                <span className="units">
                  <a href="/">ºC</a> | <a href="/">ºF </a>
                </span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1>{weatherData.city}</h1>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-5">
              <h2>
                <span>{weatherData.temperature}</span>º
              </h2>
              <h3>
                <FormattedDate date={weatherData.date} />
                <br />
              </h3>
              <ul>
                <li>
                  {weatherData.description}
                  <span></span>
                </li>
                <li></li>
              </ul>
              <h4>
                <img src={weatherData.imgUrl} alt="" width="170px" />
              </h4>
            </div>
            <div className="col-5">
              <div className="card-deck">
                <div className="col-12">
                  <div className="card">
                    <img
                      src="images/drop.svg"
                      alt="Humidity"
                      width="50px"
                      className="icons"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Humidity</h5>
                      <p className="card-text">
                        <span>{weatherData.humidity}</span>%
                      </p>
                    </div>
                  </div>

                  <div className="card">
                    <img
                      src="images/wind.svg"
                      alt="Wind"
                      width="50px"
                      className="icons"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Wind</h5>
                      <p className="card-text">
                        <span>{weatherData.wind}</span> km/h
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
