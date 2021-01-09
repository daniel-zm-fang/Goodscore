import { createGlobalStyle } from "styled-components";
import Morning from "./morning.png";
import Afternoon from "./afternoon.png";
import Evening from "./evening.png";
import PianoKeys from "../home/images/piano.jpg";

const GlobalStyle = createGlobalStyle`
  .button {
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
  }

  .signPageText {
    text-align: center;
    margin-top: 10px;
  }

  .linkText {
    display: inline;
    margin-top: 0px;
    :hover {
      color: blue;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .signOut {
    :hover {
      background-color: rgb(235,71,71)
    }
  }
  
  .morning {
    background: url(${Morning}),
    linear-gradient(to bottom left, #5ecdfb, #68d2fc, #73d8fd, #7dddfe, #87e2ff);
  }

  .afternoon {
    background: url(${Afternoon}),
    linear-gradient(to bottom left, #f69718, #ee8827, #e47a31, #d86e38, #ca623d);
  }

  .evening {
    background: url(${Evening}),
    linear-gradient(to top right, #2e324f, #333757, #383c60, #3d4168, #434671);
  }

  .morning, .afternoon, .evening{
    color: white;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
  }

  .deleteButton, .expandButton {
    position: absolute;
  top: 9.5px;
  opacity: 0.5;

    :hover {
    opacity: 1;
    cursor: pointer;
    }
  }

  .deleteButton {
    right: 14px;
  }

  .expandButton {
    right: 38px;
  }

.sheetMusicCard {
  min-width: 25%;
  :hover {
    box-shadow: 8px 8px 8px gray;
  }
}

.signUpJumbo {
  background-image: url(${PianoKeys});
  background-size: cover;
  :hover {
    cursor: pointer;
  }
}

.search {
  color: #aaa;
  max-width: 60%;
  margin-bottom: 25px;

  .searchIcon {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
  }

  .searchBox {
    padding-left: 2.375rem;
  }
}
`;

export default GlobalStyle;
