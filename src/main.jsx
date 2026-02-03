import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop";


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/heer">
    <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

