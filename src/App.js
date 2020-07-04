import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CardData from "./components/CardData.js";
import Grid from "@material-ui/core/Grid";

const url = "https://covid19.mathdro.id/api/countries/Philippines";

/* TODO
 * [ ] move components into seperate file
 * [ ] move the api into seperate file
 */

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
      <Grid
        container
        spacing={2}
        className="customize-grid"
        alignItems="center"
        alignContent="space-around"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={4} md={8}>
          <CardData name=" Confirmed " value={confirmed.value} />
        </Grid>

        <Grid item xs={4} md={8}>
          <CardData name=" Recovered " value={recovered.value} />
        </Grid>
        <Grid item xs={4} md={8}>
          <CardData name=" Deaths " value={deaths.value} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
