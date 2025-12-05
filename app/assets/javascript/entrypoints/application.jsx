import React from "react";
import ReactDOM from "react-dom/client";
import App from "../App";
import "../App.css";
import "../lib/posthog";
import "../../javascript/App.css";
import "../../javascript/index.css";
document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");

  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);

    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.error("Could not find #root element to mount React app");
  }
});
