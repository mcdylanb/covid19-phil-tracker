import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./CardData.css";

const CardData = ({ name, value }) => {
  return (
    <div className="CardData">
      <Card className="card-root">
        <CardContent>
          <h1>{name}</h1>
          <h3>{value}</h3>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardData;
