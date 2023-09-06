import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Contact from "../src/pages/Contact";
import Landing from "../src/pages/Landing";
import TeamPage from "../src/pages/TeamPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/TeamPage" element={<TeamPage />} />
      </Routes>
      <Footer />
    </React.StrictMode>
  </Router>
);
