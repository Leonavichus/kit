import React from "react";
import { Link } from "react-router-dom";

function Log_out() {
  localStorage.removeItem("registered");
  localStorage.removeItem("login");
  localStorage.removeItem("password");
  window.location.reload();
}

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        MainPage <br />
      </Link>
      <Link to="/profile">
        ProfilePage <br />
      </Link>
      {!localStorage.getItem("registered") ? (
        <Link to="/sign-in">
          SignInPage <br />
        </Link>
      ) : null}
      {localStorage.getItem("registered") ? (
        <button onClick={() => Log_out()}>Log out</button>
      ) : null}
    </div>
  );
}
