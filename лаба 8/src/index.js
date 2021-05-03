import React from "react";
import ReactDOM from "react-dom";
import Button from "./app/Button";
import Friend from "./app/BestFriend";

import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./app/index";

async function getUsers() {
  let response = await fetch("https://randomuser.me/api/?results=10");
  let json = await response.json();
  let results = json.results;
  return results;
}

function App() {
  return <Button label="click" onClick={() => getUsers()} />;
}

const store = createStore(allReducers);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <Friend />
    </div>
  </Provider>,
  rootElement
);
