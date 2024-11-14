import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailMhs from "./DetailMhs";
import Home from "./Home"; // Buat komponen ini untuk halaman utama
import Krs from "./Krs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:nim" element={<DetailMhs />} />
        <Route path="/allKRS" element={<Krs />} />
      </Routes>
    </Router>
  );
}

export default App;
