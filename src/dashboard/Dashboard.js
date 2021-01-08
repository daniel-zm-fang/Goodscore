import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import Cards from "./main/Cards";
import Bookmarks from "./components/Bookmarks.js";
import firebase from "../firebase";

export default function Dashboard() {
  const songs = firebase.firestore().collection("songs");

  return (
    <>
      {/* <Bookmarks /> */}
      <WelcomeMessage />
      <Cards />
    </>
  );
}
