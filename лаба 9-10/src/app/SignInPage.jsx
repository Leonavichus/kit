import React from "react";

export default class SignInPage extends React.Component {
  register() {
    let login = document.getElementById("login");
    let password = document.getElementById("password");

    localStorage.setItem("registered", true);
    localStorage.setItem("login", login.value);
    localStorage.setItem("password", password.value);
  }

  render() {
    return (
      <div className="sign_in">
        {!localStorage.getItem("registered") ? (
          <form>
            <input placeholder="Login" type="text" id="login" />
            <br />
            <input placeholder="Password" type="password" id="password" />
            <br />
            <button onClick={() => this.register()}>Accept</button>
          </form>
        ) : null}
      </div>
    );
  }
}
