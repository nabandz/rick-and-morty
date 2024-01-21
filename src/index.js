import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";

import App from "./components/App/App";

const Global = createGlobalStyle`
  :root {
    --font-famly: "Segoe UI", sans-serif;
    --fs-base: 1rem;
    --fs-lg: 1.125rem;
    --fs-2xl: 1.5rem;
    --fw-regular: 400;
    --fw-bold: 700;

    --color-bg: #272b33;
    --color-block: #3c3e44;
    --color-hover: #4d4f55;
    --color-white: #ffffff;
    --color-grey: #9e9e9e;
    --color-green: #55cc44;
    --color-red: #d63d2e;

    --box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
    --transition: all 0.2s ease-in-out;
  }

  * {
    font-family: var(--font-famly);
    font-weight: var(--fw-regular);
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding: 1rem;
    scrollbar-gutter: stable;
  }

  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background-color: var(--color-bg);
    color: var(--color-white);
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-bg);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-grey);
    border-radius: 0.5rem;
  }

  @font-face {
  font-family: "Segoe UI";
  font-weight: 400;
  src: url("./resources/fonts/Segoe-UI.woff2") format(".woff2");
  }

  @font-face {
    font-family: "Segoe UI";
    font-weight: 700;
    src: url("./resources/fonts/SegoeUI-Bold.woff2") format(".woff2");
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Global />
    <App />
  </>
);
