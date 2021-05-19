import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import ProfilePage from "./app/ProfilePage";
import SignInPage from "./app/SignInPage";
import Layout from "./app/Layout";
import MainPage from "./app/MainPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/sign-in" component={SignInPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
