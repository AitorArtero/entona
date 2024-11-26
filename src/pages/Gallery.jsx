import React, { useEffect, useRef } from "react";
import "./../styles/global.css";
import "./../styles/Gallery.css";

const Gallery = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, options);

    document.querySelectorAll('.gallery-item').forEach(item => {
      observerRef.current.observe(item);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="gallery-container">
      {/* Logo Entona */}
      <div className="app-title">
        <span>entona</span>
      </div>

      {/* Contenido principal */}
      <div className="gallery-content">
        <h1 className="gallery-title">Nuestros clips</h1>
        
        <div className="gallery-grid">
          <div className="gallery-item">
            <div className="video-container">
            <iframe
                src="https://www.youtube.com/embed/lf-hp0Ohjnw"
                title="Video de YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="youtube-video"
              ></iframe>
            </div>
            <h3 className="video-title">Conversación en cafetería</h3>
            <p className="video-description">Experiencia de una persona con pérdida auditiva moderada en un ambiente ruidoso.</p>
          </div>

          <div className="gallery-item">
            <div className="video-container">
              <video 
                controls 
                preload="metadata"
                poster="/placeholder-thumbnail2.jpg"
              >
                <source src="/../videos/video2.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <h3 className="video-title">Reunión familiar</h3>
            <p className="video-description">Simulación de una comida familiar desde la perspectiva de alguien con audífono.</p>
          </div>

          <div className="gallery-item">
            <div className="video-container">
              <video 
                controls 
                preload="metadata"
                poster="/placeholder-thumbnail3.jpg"
              >
                <source src="/../videos/video3.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <h3 className="video-title">Clase virtual</h3>
            <p className="video-description">Cómo se percibe una videollamada con pérdida auditiva severa.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;