import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeRoutes from "./Components/HomeRoutes/HomeRoutes";
import HighbrouNavigation from "./Components/HighbrouNavigation/HighbrouNavigation";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Components/Services/Services";

function App() {
  return (
    <Router>
      <HighbrouNavigation /> 
      <Routes>
        <Route path="/" element={<HomeRoutes />} /> 
        <Route path="/about-us" element={<AboutUs />} /> 
        <Route path="/services" element={<Services />} /> 
      </Routes>
    </Router>
  );
}

export default App;
