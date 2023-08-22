import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./Components /HomePage";
import Navbar from "./Components /Navbar";
import Blue from "./Components /Blue";
import Red from "./Components /Red";
import Footer from "./Components /Footer";

function App() {
  return (
    <div id="container">
      <Navbar />
      <div id="main-section">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Blue" element={<Blue />} />
          <Route path="/Red" element={<Red />} />
          <Route path="/Footer" element={Footer}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
