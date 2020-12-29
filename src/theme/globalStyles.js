import { createGlobalStyle } from "styled-components";
import Background from "./piano.jpg";

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
    background-image: url(${Background});
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color:white;
    width: 100%;
    height: 100%;
    min-width: 1000px;
    min-height: 800px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0;
  }

  .notHome {
    padding: 1rem;
    margin: 1rem;
    background-color: grey;
  }

  .button{
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
  }

  .darkenEntireWebsite {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }

  .centerSignBox {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10rem 5rem;
    border-radius: 1rem;
    background-color: gray;
  }
`;

export default GlobalStyle;
