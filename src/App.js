import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Home from "./components/Home";
import About from "./components/About";
import Estudios from "./components/Estudios";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import "./styles/App.css";
import gsap from "gsap";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de un tiempo de carga
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const targetElement = document.querySelector(".iam"); // Reemplaza ".yo" con la clase de tu elemento

    if (scrollPosition > 100) {
      // Ejemplo de animación con GSAP: desvanecer el elemento al hacer scroll
      gsap.to(targetElement, { opacity: 0, duration: 0.5 });
    } else {
      // Restaurar el elemento a su estado original
      gsap.to(targetElement, { opacity: 1, duration: 0.5 });
    }
  };

  return (
    <ParallaxProvider>
      <div className="app-container">
        <div className="content">
          <Routes>
            <Route path="/" element={loading ? <Loader /> : <Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/estudios" element={<Estudios />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div className="parallax-section">
          <Parallax y={[-10, 10]} tagOuter="figure">
            <About />
            <Estudios />
            <Contact />
            <Footer />
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
