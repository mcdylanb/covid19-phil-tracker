import React from "react";
import { Card, Typography } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "background-color": "#3824B8"
  }
});

const theme = createMuiTheme({
  palette: {
    text: {
      secondary: "#fff"
    }
  }
});
const CardData = ({ name, value }) => {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" color="textSecondary">
              {name}
            </Typography>
            <Typography variant="h2" color="textSecondary">
              {value}
            </Typography>
          </CardContent>
        </Card>
      </ThemeProvider>
    </div>
  );
};

export default CardData;
