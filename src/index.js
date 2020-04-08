import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./context";
import * as serviceWorker from "./serviceWorker";
document.body.style.backgroundColor = "#EEEDE7";

ReactDOM.render(
  <ProductProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
