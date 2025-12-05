// app/assets/javascript/entrypoints/application.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "../App"; // NOTE: this path matches your App.jsx at app/assets/javascript/App.jsx
// import "../styles/application.css"; // optional, if/when you create CSS

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
