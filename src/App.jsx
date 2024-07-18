import "./App.css";
import { React } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import About from "./Components/About/about";
import Ideas from "./Components/Ideas";
import CV from "./Components/CV";
import Home from "./Components/Home";
import MasterDetail from "./Components/MasterDetail";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main_content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/writing" element={<MasterDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
