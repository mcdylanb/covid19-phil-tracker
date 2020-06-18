import React from "react";

const Card = ({ name, value }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{value}</h3>
    </div>
  );
};

export default Card;
