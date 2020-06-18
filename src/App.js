import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const url = "https://covid19.mathdro.id/api/countries/Philippines";

const App = () => {
  const [confirmed, setConfirmed] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [deaths, setDeaths] = useState([]);

  axios.get(url).then(response => {
    console.log("promise fulfilled");
    setConfirmed(response.data.confirmed);
    setRecovered(response.data.recovered);
    setDeaths(response.data.deaths);
  });

  console.log(`confirmed data : ${confirmed.value}`);
  console.log(`confirmed data : ${recovered.value}`);
  console.log(`confirmed data : ${deaths.value}`);

  return (
    <div>
      <div>
        <h3>Confirmed</h3>
        <h1> {confirmed.value}</h1>
      </div>
      <div>
        <h3>Recovered</h3>
        <h1> {recovered.value}</h1>
      </div>
      <div>
        <h3>Deaths</h3>
        <h1> {deaths.value}</h1>
      </div>
    </div>
  );
};

export default App;
