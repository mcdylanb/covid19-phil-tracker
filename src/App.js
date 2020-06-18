import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

const url = "https://covid19.mathdro.id/api/countries/Philippines";

const App = () => {
  const [confirmed, setConfirmed] = useState([]);

  axios.get(url).then(response => {
    console.log("promise fulfilled");
    setConfirmed(response.data.confirmed);
  });

  console.log(`confirmed data : ${confirmed.value}`);

  return (
    <div>
      <h3>Confirmed</h3>
      <h1> {confirmed.value}</h1>
    </div>
  );
};

export default App;
