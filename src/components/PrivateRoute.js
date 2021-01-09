import React from "react";
import { Route, Redirect } from "react-router-dom";
import HomePage from "../home/HomePage";
import { useAuth } from "./AuthContext";

function PrivateRoute({ path, component: Component, ...rest }) {
  const { currUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (currUser) {
          if (path === "/") {
            return <Redirect to="/dashboard" />;
          } else {
            return <Component {...props} />;
          }
        } else {
          if (path === "/") {
            return <HomePage />;
          } else {
            return <Redirect to="/" />;
          }
        }
      }}
    ></Route>
  );
}

export default PrivateRoute;
