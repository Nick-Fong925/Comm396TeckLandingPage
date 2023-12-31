import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "../src/components/Header";

import Landing from "../src/pages/Landing";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </React.StrictMode>
  </Router>
);
