import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class SignInPage extends Component {
  render() {
    return ReactDOM.createPortal(
      <div className="darkenEntireWebsite">
        <div className="centerSignBox">
          <h2>Sign In</h2>
          <form>
            <label for="Email">Email:</label>
            <input type="text" id="email" name="email" required />
            <br />
            <label for="Password">Password:</label>
            <input type="text" id="password" name="password" required />
            <br />
            <Link to="/home/">
              <input class="signButton" type="submit" value="Sign in" />
            </Link>
          </form>
        </div>
      </div>,
      document.getElementById("sign-root")
    );
  }
}

export default SignInPage;
