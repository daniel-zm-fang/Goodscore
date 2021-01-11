import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import Cards from "./main/Cards";
// import Friends from "./main/Friends";

function Dashboard() {
  return (
    <>
      <WelcomeMessage />
      {/* <Friends /> */}
      <Cards />
    </>
  );
}

export default Dashboard;
