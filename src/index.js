import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, useHistory } from "react-router-dom";

import { ContextProvider } from "./Context/ContextProvider";
import App from "./App";

ReactDOM.render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>,
  document.getElementById("root"),
);
