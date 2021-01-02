import React from "react";
import Bookmarks from "./components/Bookmarks.js";
import { Switch, Route } from "react-router-dom";
import Practice from "./components/Practice";
import Explore from "./components/Explore";
import Community from "./components/Community";
import Feedback from "./components/Feedback";

export default function Dashboard() {
  return (
    <>
      <Bookmarks />
      <Switch>
        <Route path="/dashboard/practice" component={Practice} />
        <Route path="/dashboard/explore" component={Explore} />
        <Route path="/dashboard/community" component={Community} />
        <Route path="/dashboard/feedback" component={Feedback} />
      </Switch>
      Hello World
    </>
  );
}
