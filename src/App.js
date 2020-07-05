import React, { useState, useEffect } from "react";
import axios from "axios";
import CardData from "./components/CardData.js";
import { Grid, Typography } from "@material-ui/core";

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
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={8}>
          <CardData name=" Confirmed " value={confirmed.value} />
        </Grid>

        <Grid item xs={8}>
          <CardData name=" Recovered " value={recovered.value} />
        </Grid>
        <Grid item xs={8}>
          <CardData name=" Deaths " value={deaths.value} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
