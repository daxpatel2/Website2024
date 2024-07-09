import "./App.css";
import { React } from "react";
import { Routes, Router, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import About from "./Components/About/about";
import Ideas from "./Components/Ideas";
import CV from "./Components/CV";
import Home from "./Components/Home";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/CV" element={<CV />} />
      </Routes>
    </div>
  );
}

export default App;
