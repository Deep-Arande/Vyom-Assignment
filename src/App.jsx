import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PatientSearch from "./pages/PatientSearch";
import ScanSearch from "./pages/ScanSearch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient" element={<PatientSearch />} />
        <Route path="/scan" element={<ScanSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
