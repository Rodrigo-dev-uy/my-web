import { Parallax } from "react-parallax";
import React, { useEffect } from "react";
import gsap from "gsap";

const About = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const targetElement = document.querySelector("h1"); // Reemplaza ".yo" con la clase de tu elemento

    if (scrollPosition > 100) {
      // Ejemplo de animación con GSAP: desvanecer el elemento al hacer scroll
      gsap.to(targetElement, { opacity: 0, duration: 0.5 });
    } else {
      // Restaurar el elemento a su estado original
      gsap.to(targetElement, { opacity: 1, duration: 0.5 });
    }
  };
  return (
    <div className="hidden" id="about">
      <h1>Título del Parallax</h1>
      <Parallax bgImage="/ruta/a/tu/imagen.jpg" strength={500}>
        <div style={{ height: 500 }}>Contenido del Parallax</div>
      </Parallax>
    </div>
  );
};

export default About;
