import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { TestWithRedux } from "./pages/TestWithRedux";
import { TestWithZustand } from "./pages/TestWithZustand";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TestWithRedux />
              <TestWithZustand />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
