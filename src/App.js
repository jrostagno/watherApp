import "./App.css";

import Nav from "../src/Components/Nav/Nav";
import Cards from "../src/Components/Cards/Cards";
import IsLoading from "../src/Components/IsLoading/IsLoading";
import { useState } from "react";

function App() {
  const [cities, setCities] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <Nav
        setCities={setCities}
        setNotFound={setNotFound}
        setIsLoading={setIsLoading}
      />
      {isLoading ? (
        <IsLoading />
      ) : notFound ? (
        <h1>City Not Found...</h1>
      ) : (
        <Cards cities={cities} setCities={setCities} />
      )}
    </div>
  );
}

export default App;
