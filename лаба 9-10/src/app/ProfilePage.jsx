import React from "react";
import { Redirect } from "react-router-dom";

export default function ProfilePage() {
  return (
    <div className="Profile_Page">
      {!localStorage.getItem("registered") ? <Redirect to="/" /> : null}
      <div className="Info">
        Login: {localStorage.getItem("login")} <br />
        Password: {localStorage.getItem("password")}
      </div>
    </div>
  );
}
