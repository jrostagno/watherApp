import React from "react";
import { useState } from "react";

import { getCities } from "../../Api.js";

export default function SearchBar({ setCities, setNotFound, setIsLoading }) {
  const [city, setCity] = useState([]);

  async function apiRequest(city) {
    let newCity = await getCities(city);

    if (!newCity) {
      setNotFound(true);
      setIsLoading(false);
    } else {
      setNotFound(false);
      setCities((oldCities) => [...oldCities, newCity]);
      setIsLoading(false);
    }
  }

  function handleOnchange(e) {
    setCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    apiRequest(city);
    setCity("");
  }

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="flex"
    >
      <input
        type="search"
        className="bg-purple-white shadow rounded border-0 p-2"
        placeholder="City, Country..."
        value={city}
        onChange={handleOnchange}
      />

      <button
        className="  bg-teal-900  hover:bg-teal-700 text-white font-bold py-2 px-4 rounded ml-5"
        disabled={city === ""}
      >
        Add
      </button>
    </form>
  );
}
