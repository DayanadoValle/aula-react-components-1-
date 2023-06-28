import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/home/home.js";
import Profile from "./pages/profile/profile.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
