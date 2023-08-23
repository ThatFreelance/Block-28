import { Routes, Route } from "react-router-dom";
import HomePage from "./Components /HomePage";
import Navbar from "./Components /Navbar";
import Blue from "./Components /Blue";
import Red from "./Components /Red";
import Footer from "./Components /Footer";
import "./App.css";


function App() {
  return (
    <div id="container">
      <Navbar />
      <div id="main-section">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Blue" element={<Blue />} />
          <Route path="/Red" element={<Red />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
