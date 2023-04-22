import React from "react";

export default function WeatherGifs(props) {
  return (
    <img
      src={require(`./img/${props.number}.gif`)}
      alt="hi"
      width="250"
      className=" border border-2 rounded-5"
    />
  );
}
