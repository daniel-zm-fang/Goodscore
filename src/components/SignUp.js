// import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
// import { useAuth } from "./AuthContext";

function SignUpPage() {
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const passwordConfirmRef = useRef();
  // const { signup } = useAuth();

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   signup(emailRef.current.value, passwordRef.current.value);
  // }

  return ReactDOM.createPortal(
    <div className="darkenEntireWebsite">
      <div className="centerSignBox">
        <h2>Sign Up</h2>
        <form>
          <label for="Email">Email:</label>
          <input type="text" id="email" name="email" required />
          <br />
          <label for="password">Password:</label>
          <input type="text" id="password" name="password" required />
          <br />
          <label for="passwordConfirm">Confirm password:</label>
          <input
            type="text"
            id="passwordConfirm"
            name="passwordConfirm"
            required
          />
          <br />
          <Link to="/home/">
            <input class="signButton" type="submit" value="Sign up" />
          </Link>
          <hr />
          Already have an account?
          <Link to="/signin">Log In</Link>
        </form>
      </div>
    </div>,
    document.getElementById("sign-root")
  );
}

export default SignUpPage;
