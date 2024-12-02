import React, { useEffect, useRef } from "react";
import "./../styles/global.css";
import "./../styles/About.css";

const AboutEntona = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    // Configuración del Intersection Observer
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          // Una vez que se ha animado, dejamos de observar el elemento
          observer.unobserve(entry.target);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, options);

    // Observamos todos los párrafos
    document.querySelectorAll('.about-paragraph').forEach(paragraph => {
      observerRef.current.observe(paragraph);
    });

    // Limpieza al desmontar
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="about-container">
      {/* Logo Entona */}
      <div className="app-title">
        <span>entona</span>
      </div>

      {/* Contenido principal */}
      <div className="about-content">
        <h1 className="about-title">¿Qué es entona?</h1>
        
        <div className="about-text-container">
          <p className="about-paragraph">
            En un mundo en el que la comunicación es fundamental para interactuar y acceder a la información, las personas con discapacidad auditiva se enfrentan a{" "}
            <span className="about-highlight">desafíos diarios</span> que muchas veces pasan desapercibidos. Con este proyecto llamado "Entona", se busca crear una herramienta que{" "}
            <span className="about-highlight">sensibilice a las personas</span> oyentes sobre las realidades de la discapacidad auditiva.
          </p>

          <p className="about-paragraph">
            El proyecto consistirá de una página web con el objetivo de ofrecer a las personas oyentes una{" "}
            <span className="about-highlight">experiencia inmersiva</span> que les permita ponerse en la situación de quienes viven con diferentes grados de sordera y aquellas personas que utilizan audífonos.
          </p>

          <p className="about-paragraph">
            La herramienta principal es un convertidor de audio, que{" "}
            <span className="about-highlight">simula cómo perciben los sonidos aquellas personas que usan audífonos o aquellos con pérdida auditiva parcial o total.</span>
          </p>

          <p className="about-paragraph">
            Mediante esta experiencia, se busca que los usuarios puedan experimentar en carne propia lo que implica la barrera auditiva en diversas situaciones cotidianas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutEntona;