import React from "react";
import ReactDOM from "react-dom";
import Button from "./app/Button";
import BestFriendsList from "./app/BestFriendList";
import { createStore } from "redux";
import { Provider } from "react-redux";
import counterReducer from "./app/UserSelect";

async function getUsers() {
  let response = await fetch("https://randomuser.me/api/?results=10");
  let json = await response.json();
  let results = json.results;
  return results;
}

function App() {
  return <Button label="click" onClick={() => getUsers()} />;
}

const store = createStore(counterReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <hr />
      <h2>Best_Friend</h2>
      <BestFriendsList />
    </div>
  </Provider>,
  rootElement
);
