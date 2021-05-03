import React from "react";
import ReactDOM from "react-dom";
import Button from "./app/Button";

async function getUsers() {
  let response = await fetch("https://randomuser.me/api/?results=10");
  let json = await response.json();
  let results = json.results;
  return results;
}

function App() {
  return <Button label="click" onClick={() => getUsers()} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
