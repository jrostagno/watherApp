import React from "react";

import style from "./Card.module.css";

export default function Card({ name, min, max, img, onClose }) {
  return (
    <div className={style.card}>
      <button className={style.btn} onClick={onClose}>
        X
      </button>
      <h2 className={style.name}>{name}</h2>
      <div className={style.info}>
        <div className={style.temp}>
          <h3>Min</h3>
          <h3>{`${min} °C`}</h3>
        </div>
        <div className={style.temp}>
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
