import "./App.css";

import Nav from "../src/Components/Nav/Nav";
import Cards from "../src/Components/Cards/Cards";
import { useState } from "react";

import { getCities } from "./Api";

function App() {
  const [cities, setCities] = useState([]);

  async function apiRequest(city) {
    let newCity = await getCities(city);

    setCities((oldCities) => [...oldCities, newCity]);
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((city) => city.id !== id));
  }

  return (
    <div className="App">
      <Nav apiRequest={apiRequest} />

      <Cards cities={cities} onClose={onClose} />
    </div>
  );
}

export default App;
