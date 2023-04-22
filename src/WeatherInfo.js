import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherGifs from "./WeatherGifs";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      {" "}
      <div className="row mt-4">
        <div className="col-6">
          {" "}
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>{" "}
        <div className="col-6">
          {" "}
          <WeatherGifs number={props.data.icon} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-6 d-flex ">
          <div>
            <WeatherIcon code={props.data.icon} size={54} />
          </div>
          <div className="ms-3">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li> Humidity:{props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
