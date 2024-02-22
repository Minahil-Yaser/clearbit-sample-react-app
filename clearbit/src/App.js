import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Enrichment from "./components/Enrichment";
import Risk from "./components/Risk";
import Results from "./components/Results";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="body" style={{ minHeight: "85vh" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enrichment" element={<Enrichment />} />
            <Route path="/risk" element={<Risk />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
