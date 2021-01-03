import React from "react";
import PrivateRoute from "./components/PrivateRoute";
import Practice from "./components/Practice";
import Explore from "./components/Explore";
import Community from "./components/Community";
import Feedback from "./components/Feedback";
import Bookmarks from "./components/Bookmarks.js";
import { Switch } from "react-router";

export default function Dashboard() {
  return (
    <>
      <Bookmarks />
      <Switch>
        <PrivateRoute path="/dashboard/practice" component={Practice} />
        <PrivateRoute path="/dashboard/explore" component={Explore} />
        <PrivateRoute path="/dashboard/community" component={Community} />
        <PrivateRoute path="/dashboard/feedback" component={Feedback} />
      </Switch>
    </>
  );
}
