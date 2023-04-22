import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherGifs from "./WeatherGifs";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo p-3">
      {" "}
      <div className="row mt-4 ">
        <div className="col-6 text-center city-info">
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
          <div className="mt-3">
            <WeatherIcon code={props.data.icon} size={70} />
          </div>
          <div className="ms-3 mt-1">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6 mt-2 ">
          <ul>
            <li className="humid-wind">
              {" "}
              <span>
                <i class="bi bi-moisture"></i>
              </span>{" "}
              Humidity:{props.data.humidity} %
            </li>
            <li className="humid-wind">
              <span>
                <i class="bi bi-tornado"></i>
              </span>{" "}
              Wind: {props.data.wind} km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
