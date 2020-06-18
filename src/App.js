import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

const url = "https://covid19.mathdro.id/api/countries/Philippines";

const App = () => {
  const [data, setData] = useState([]);

  axios.get(url).then(response => {
    console.log("promise fulfilled");
    setData(response.data);
  });

  console.log(`confirmed data : ${data[0]}`);

  return (
    <div>
      <h3>Confirmed</h3>
      <h1></h1>
    </div>
  );
};

export default App;
