import React, { useState, useEffect } from "react";
import axios from "axios";
import CardData from "./components/CardData.js";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const url = "https://covid19.mathdro.id/api/countries/Philippines";

const useStyles = makeStyles({
  root: {
    "background-color": "#1C174F"
  }
});

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

  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={10}>
          {/* intro text */}
          <Grid container>
            <Grid item>
              <Typography variant="h4" align="center">
                Lets Help
              </Typography>
              <Typography variant="h4" align="center">
                Recover The Earth
              </Typography>
              <Typography variant="h4" align="center">
                Start From Us!
              </Typography>
            </Grid>
          </Grid>

          {/* additional text */}
          <Grid container>
            <Grid item>
              <Typography>
                The outbreak of the coronavirus issue or called Covid-19 makes
                the Earth grieve
              </Typography>
            </Grid>
          </Grid>

          {/* action buttons */}
          <Grid container spacing={2} alignItems="center" justify="center">
            <Grid item xs={6}>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" color="secondary">
                Watch Video
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {/* stats */}
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
