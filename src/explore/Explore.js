import React, { Component } from "react";
import Manual from "./Manual";
import Recommend from "./Recommend";

class Explore extends Component {
  render() {
    return (
      <>
        <Recommend />
        <hr></hr>
        <Manual />
      </>
    );
  }
}

export default Explore;
