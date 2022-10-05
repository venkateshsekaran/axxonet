import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n";
// import * as themes from "../src/schema.json";
// import { setToLS } from "../src/utils/storage";
// import "./i18nextInit";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      {" "}
      <App />
    </React.Suspense>
  </React.StrictMode>
);
