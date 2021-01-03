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

  .signPageText {
    text-align: center;
    margin-top: 10px;
  }
`;

export default GlobalStyle;
