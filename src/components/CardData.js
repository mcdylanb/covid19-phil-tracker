import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const CardData = ({ name, value }) => {
  return (
    <div>
      <Card>
        <CardContent>
          <h1>{name}</h1>
          <h3>{value}</h3>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardData;
