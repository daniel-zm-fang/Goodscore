import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./AuthContext";

function PrivateRoute({ component: Component, ...rest }) {
  const { currUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currUser ? <Component {...props} /> : <Redirect to="/home" />;
      }}
    ></Route>
  );
}

export default PrivateRoute;
