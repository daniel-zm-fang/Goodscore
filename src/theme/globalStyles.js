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

  p {
    text-align: center;
    margin-top: 10px;
    :hover {
      text-decoration: underline;
      text-decoration-color: blue;
    }
  }

`;

export default GlobalStyle;
