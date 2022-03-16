import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";

import { GlobalStyles } from "./styles/GlobalStyles";
import { GlobalFonts } from "./styles/GlobalFonts";
import { theme } from "./styles/theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalFonts />
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
