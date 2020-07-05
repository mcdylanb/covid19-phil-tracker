import React from "react";
import { Card, Typography } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

const CardData = ({ name, value }) => {
  return (
    <div className="CardData">
      <Card className="card-root">
        <CardContent>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="h2">{value}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardData;
