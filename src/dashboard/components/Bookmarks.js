import React, { Component } from "react";
import Bookmark from "./Bookmark";
import styled from "styled-components";

const Wrapper = styled.nav`
  position: fixed;
  right: -1%;
  top: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
`;

class Bookmarks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: [
        [
          "Practice",
          "/practice",
          "linear-gradient(to right, #fe8c00, #f83600)",
        ],
        ["Explore", "/explore", "linear-gradient(to right, #485563, #29323c)"],
        [
          "Community",
          "/community",
          "linear-gradient(to bottom right, #EA898A, #7E1477)",
        ],
        [
          "Feedback",
          "/feedback",
          "linear-gradient(to right, #9d50bb, #6e48aa)",
        ],
      ],
    };
  }

  render() {
    const nameList = this.state.info.map((x, index) => (
      <Bookmark name={x[0]} link={x[1]} backgroundcolor={x[2]} key={index} />
    ));
    return <Wrapper>{nameList}</Wrapper>;
  }
}

export default Bookmarks;
