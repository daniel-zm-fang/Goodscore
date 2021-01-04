import { createGlobalStyle } from "styled-components";
import Morning from "./morning.png";
import Afternoon from "./afternoon.png";
import Evening from "./evening.png";

const GlobalStyle = createGlobalStyle`
  .notHome {
    padding: 1rem;
    margin: 1rem;
    background-color: green;

  }

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

  .morning, .afternoon, .evening {
    color: white;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
  }
`;

export default GlobalStyle;
