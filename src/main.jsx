import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ROUTER_BASENAME } from "./utils/router.js";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={ROUTER_BASENAME}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
