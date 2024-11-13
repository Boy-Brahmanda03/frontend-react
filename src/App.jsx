import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DetailMhs from "./DetailMhs";
import Home from "./Home"; // Buat komponen ini untuk halaman utama

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:nim" element={<DetailMhs />} />
      </Routes>
    </Router>
  );
}

export default App;
