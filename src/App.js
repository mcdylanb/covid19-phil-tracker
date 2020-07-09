import React, { useState, useEffect } from "react";
import axios from "axios";
import CardData from "./components/CardData.js";
import { Grid, Typography, Button } from "@material-ui/core";
import "./App.css";

const url = "https://covid19.mathdro.id/api/countries/Philippines";

const App = () => {
  const [confirmed, setConfirmed] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");

  console.log(confirmed);
  console.log(confirmed.value);
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
        direction="column"
        spacing={3}
        alignItems="center"
        justify="center"
      >
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="column"
          className="intro"
          item
          xs={10}
        >
          <Grid item xs={12}>
            {/* intro text */}
            <Typography variant="h4" align="center">
              Lets Help
            </Typography>
            <Typography variant="h4" align="center">
              Recover The Earth
            </Typography>
            <Typography
              variant="h4"
              align="center"
              className="intro__important"
            >
              Start From Us!
            </Typography>
          </Grid>
        </Grid>

        {/* additional text */}
        <Grid
          container
          className="intro"
          item
          alignItems="center"
          justify="center"
          xs={8}
        >
          <Grid item>
            <Typography align="center">
              The outbreak of the coronavirus issue or called Covid-19 makes the
              Earth grieve
            </Typography>
          </Grid>
        </Grid>

        {/* action buttons */}
        <Grid
          container
          item
          alignItems="center"
          justify="center"
          direction="row"
          spacing={2}
          xs={8}
        >
          <Grid item xs={6} sm={6}>
            <Button
              variant="contained"
              color="primary"
              href="http://www.covid19.gov.ph/"
            >
              Learn More
            </Button>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Button
              variant="outlined"
              color="secondary"
              href="https://www.youtube.com/playlist?list=PLvrp9iOILTQaJa78zFQ0QgvShQ2HEwHxP"
            >
              Watch Video
            </Button>
          </Grid>
        </Grid>

        {/* stats */}
        <Grid container spacing={2} item xs={12}>
          <Grid item xs={12} sm={4}>
            <CardData name=" Confirmed " value={confirmed.value} />
          </Grid>

          <Grid item xs={12} sm={4}>
            <CardData name=" Recovered " value={recovered.value} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardData name=" Deaths " value={deaths.value} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
