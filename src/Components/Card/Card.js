import React from "react";

export default function Card({ name, min, max, img, setCities, id }) {
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((city) => city.id !== id));
  }

  return (
    <div className="w-64 h-44 bg-slate-100 relative rounded-md">
      <div className="flex bg-gray-500 text-gray-100 p-1  rounded-t-md">
        <button
          className="absolute bg-slate-100 border-none rounded-sm right-2.5  m-1.5  text-black w-5"
          onClick={() => {
            onClose(id);
          }}
        >
          X
        </button>
        <h2 className="text-2xl inline-block text-slate-50">{name}</h2>
      </div>
      <div className="flex justify-evenly  my-7">
        <div className="text-xl ">
          <h3>Min</h3>
          <h3>{`${min} °C`}</h3>
        </div>
        <div className="text-xl ">
          <h3>Max</h3>
          <h3>{`${max} °C`}</h3>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          width="80"
          height="80"
          alt=""
        />
      </div>
    </div>
  );
}
