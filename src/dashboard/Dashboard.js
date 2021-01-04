import React from "react";
import WelcomeMessage from "./WelcomeMessage"
import PrivateRoute from "../components/PrivateRoute";
import Cards from "./main/Cards";

import Bookmarks from "./components/Bookmarks.js";
import { Switch } from "react-router";

export default function Dashboard() {

  return (
    <>
      {/* <Bookmarks /> */}
      <WelcomeMessage />
      <Cards />
    </>
  );
}
