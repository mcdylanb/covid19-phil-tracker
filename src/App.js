import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const url = "https://covid19.mathdro.id/api/countries/Philippines";

/* TODO
 * [ ] move components into seperate file
 * [ ] move the api into seperate file
 */

const Card = ({ name, value }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{value}</h3>
    </div>
  );
};

const App = () => {
  const [confirmed, setConfirmed] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");

  useEffect(() => {
    axios.get(url).then(response => {
      setConfirmed(response.data.confirmed);
      setRecovered(response.data.recovered);
      setDeaths(response.data.deaths);
    });
  }, []);

  return (
    <div>
      <Card name=" Confirmed " value={confirmed.value} />
      <Card name=" Recovered " value={recovered.value} />
      <Card name=" Deaths " value={deaths.value} />
    </div>
  );
};

export default App;
