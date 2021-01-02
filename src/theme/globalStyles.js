import { createGlobalStyle } from "styled-components";

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

  .signBox input {
    display: block;
    margin: 1rem auto;
    padding: 10px;
    width: 80%;
    border-radius:5px;
    border: 1px solid;
  }

`;

export default GlobalStyle;
