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
          <input
            type="text"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
            required
          />
          <Link to="/home/">
            <input class="signButton" type="submit" value="Sign up" />
          </Link>
          <hr />
          Already have an account?
          <Link to="/signin"> Log In</Link>
        </form>
      </div>
    </div>,
    document.getElementById("sign-root")
  );
}

export default SignUpPage;
