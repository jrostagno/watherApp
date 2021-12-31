import React from "react";
import Card from "../Card/Card";

export default function Cards({ cities, setCities }) {
  return (
    <div
      className="grid p-8 grid-cols-3 gap-8 m-auto max-w-5xl"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
    >
      {cities.map((c) => (
        <div>
          <Card
            setCities={setCities}
            key={c.id}
            id={c.id}
            min={c.min}
            max={c.max}
            name={c.name}
            img={c.img}
            humidity={c.humidity}
            pressure={c.pressure}
            wind={c.wind}
            weather={c.weather}
          />
        </div>
      ))}
    </div>
  );
}
