import React, { Component } from "react";
import ReactDOM from "react-dom";

class SignUpPage extends Component {
  render() {
    return ReactDOM.createPortal(
      <div className="darkenEntireWebsite">
        <div className="centerSignBox">
          Sign Up
          <form>
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" />
            <br />
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname" />
            <br />
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" />
            <br />
            <input type="submit" value="Sign up" />
          </form>
        </div>
      </div>,
      document.getElementById("sign-root")
    );
  }
}

export default SignUpPage;
