import React from "react";
import { useState } from "react";

export default function Card({
  name,
  min,
  max,
  img,
  setCities,
  id,
  pressure,
  humidity,
  wind,
  weather,
}) {
  const [tempUnit, setTempUnit] = useState(false);

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((city) => city.id !== id));
  }

  return (
    <div className="w-64 h-44 bg-teal-50 relative rounded-md border">
      <div className="flex bg-teal-700 text-gray-100 p-1  rounded-t-md">
        <button
          className="absolute bg-slate-100 border-none rounded-sm right-2.5 h-4.5 mt-1     text-black w-5"
          onClick={() => {
            onClose(id);
          }}
        >
          X
        </button>
        <h2 className="text-2xl inline-block text-slate-50  ml-3">{name}</h2>
      </div>

      <p className="flex justify-start ml-4 p-1">Wheather: {weather}</p>
      <div className="flex flex-row-reverse justify-between">
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          width="50"
          height="50"
          alt=""
          className="mr-5"
        />
        <div className="flex flex-col ">
          <p className="text-xs flex justify-start ml-5 ">
            Pressure: {pressure} hPa
          </p>

          <p className="text-xs flex justify-start ml-5 ">
            Humidity: {humidity} %
          </p>
        </div>
      </div>

      <div className="flex h-11  ">
        <div className="text-base  mr-7 ml-5 ">
          <h3>Min</h3>
          {tempUnit ? (
            <h3>{`${Math.round(min * (9 / 5) + 32)} °F`}</h3>
          ) : (
            <h3>{`${min} °C`}</h3>
          )}
        </div>
        <div className="text-base  mr-8 ml-3">
          <h3>Max</h3>
          {tempUnit ? (
            <h3>{`${Math.round(max * (9 / 5) + 32)} °F`}</h3>
          ) : (
            <h3>{`${max} °C`}</h3>
          )}
        </div>
        {tempUnit ? (
          <p
            onClick={() => setTempUnit(false)}
            className="cursor-pointer italic hover:text-slate-600 hover:border  mt-3 ml-3"
          >
            °F to °C
          </p>
        ) : (
          <p
            onClick={() => setTempUnit(true)}
            className="cursor-pointer italic  hover:text-slate-600 hover:border mt-3 ml-3"
          >
            °C to °F
          </p>
        )}
      </div>
    </div>
  );
}
