import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.css";
import "./i18n"; // Import i18n configuration

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
