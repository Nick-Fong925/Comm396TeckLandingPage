import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <Header />
      <App />
      <Footer />
    </React.StrictMode>
  </Router>
);
