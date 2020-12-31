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
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
            <Link to="/home/">
              <input class="signButton" type="submit" value="Sign in" />
            </Link>
            <hr />
            Forget password?
          </form>
        </div>
      </div>,
      document.getElementById("sign-root")
    );
  }
}

export default SignInPage;
