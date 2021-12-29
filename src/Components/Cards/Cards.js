import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards({ cities, onClose }) {
  return (
    <div className={styles.cards}>
      {cities ? (
        cities.map((c) => (
          <Card
            id={c.id}
            min={c.min}
            max={c.max}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
          />
        ))
      ) : (
        <h1>City Not found</h1>
      )}
    </div>
  );
}
