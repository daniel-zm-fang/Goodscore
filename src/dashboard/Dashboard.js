import React from "react";
import WelcomeMessage from "../components/WelcomeMessage"
import PrivateRoute from "./components/PrivateRoute";
import Cards from "./components/Cards";
import Explore from "./explore/Explore";
import Community from "./components/Community";
import Feedback from "./components/Feedback";
import Bookmarks from "./components/Bookmarks.js";
import { Switch } from "react-router";

export default function Dashboard() {

  return (
    <>
      <Bookmarks />
      <Cards />
      <Switch>
        <PrivateRoute path="/dashboard/explore" component={Explore} />
        <PrivateRoute path="/dashboard/community" component={Community} />
        <PrivateRoute path="/dashboard/feedback" component={Feedback} />
      </Switch>
    </>
  );
}
