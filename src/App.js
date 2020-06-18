import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchData } from "./api";

const App = () => {
  // state = {
  //   data: {}
  // };

  const [data, setData] = useState([]);

  const componentDidMount = async () => {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  };

  console.log(fetchData.data);

  return <div>test</div>;
};

export default App;
