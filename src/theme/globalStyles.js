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
    width: 300px;
    transform: translate(-50%, -50%);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.9);
    padding: 3rem 2rem;
    border-radius: 1rem;
    background-color: white;
    color: black;
    text-align: center;
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
