import React, { Component } from "react";
import ReactDOM from "react-dom";

class SignInPage extends Component {
  render() {
    return ReactDOM.createPortal(
      <div className="darkenEntireWebsite">
        <div className="centerSignBox">
          Sign In
          <form>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" />
            <br />
            <label for="password">Password:</label>
            <input type="text" id="password" name="password" />
            <br />
            <input type="submit" value="Sign in" />
          </form>
        </div>
      </div>,
      document.getElementById("sign-root")
    );
  }
}

export default SignInPage;
