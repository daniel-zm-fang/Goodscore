import React from "react";
import WelcomeMessage from "./WelcomeMessage"
import Cards from "./main/Cards";
import Bookmarks from "./components/Bookmarks.js";

export default function Dashboard() {

  return (
    <>
      {/* <Bookmarks /> */}
      <WelcomeMessage />
      <Cards />
    </>
  );
}
