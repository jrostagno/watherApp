import React from "react";
import { useState } from "react";
import styles from "./SearchBar.modules.css";

export default function SearchBar({ apiRequest }) {
  const [city, setCity] = useState([]);

  function handleOnchange(e) {
    setCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    apiRequest(city);
    setCity("");
  }

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      style={{ display: "flex" }}
    >
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search City..."
        onChange={handleOnchange}
        value={city}
        aria-label="Search"
      />

      <input class="btn btn-outline-success" type="submit" value="Add" />
    </form>
  );
}
