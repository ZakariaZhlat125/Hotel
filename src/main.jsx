import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
// import './index.css'
import { RoomProvider } from "./store/context";
ReactDOM.createRoot(document.getElementById("root")).render(
  <RoomProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </RoomProvider>
);
