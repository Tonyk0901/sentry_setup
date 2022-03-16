import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import App from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";
import { GlobalFonts } from "./styles/GlobalFonts";

import { reducer } from "./store/reducer";
import { theme } from "./styles/theme";

const store = configureStore({
  reducer,
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
