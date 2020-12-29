import React, { Component } from "react";

class Explore extends Component {
  render() {
    return (
      <div class="notHome">
        <form action="">
          <input type="text" placeholder="Search.." name="search" />
          <button class="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Explore;
