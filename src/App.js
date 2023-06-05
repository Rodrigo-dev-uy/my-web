import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Home from "./components/Home";
import About from "./components/About";
import Estudios from "./components/Estudios";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import "./styles/App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de un tiempo de carga
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <ParallaxProvider>
      <div className="app-container">
        <Routes>
          <Route path="/my-web" element={loading ? <Loader /> : <Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/estudios" element={<Estudios />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
