import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }
  let latitude = 52;
  let longitude = 29;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=ac209dae1f283fb332a5bb7f50b0f468`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast mt-4">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="02d" size={36} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">19°</span>{" "}
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
