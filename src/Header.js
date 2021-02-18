import React from "react";

export default function Header() {
  let weatherData = {
    city: "New York",
    temperature: -6,
    date: "Sunday 14:37",
    description: "Overcast clouds",
    imgUrl: "http://openweathermap.org/img/wn/04d@2x.png",
    humidity: 64,
    wind: 4,
  };

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
              <br />
            </h3>
            <ul>
              <li>
                Last updated: {weatherData.date} <br />
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
}
