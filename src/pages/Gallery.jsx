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
                src="https://drive.google.com/file/d/1dm7RukVkLrpbv2_xsYi_C-C1H5b8v01-/preview"
                title="Video aula"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="youtube-video"
              ></iframe>
            </div>
            <h3 className="video-title">Clip aula</h3>
            <p className="video-description">Simulación de un día cualquiera de universidad desde la perspectiva de una persona que utiliza audífonos.</p>
          </div>

          <div className="gallery-item">
            <div className="video-container">
              <iframe
                src="https://drive.google.com/file/d/1v8QnOtBNEVqqalPCxXibO9C4uRZ_ictp/preview"
                title="Ruido ambiente excesivo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="youtube-video"
              ></iframe>
            </div>
            <h3 className="video-title">Ruido ambiente excesivo</h3>
            <p className="video-description">Cómo se percibe un ambiente excesivamemte ruidoso para una persona que utiliza audífonos.</p>
          </div>
          
          <div className="gallery-item">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/lf-hp0Ohjnw"
                title="Video Gregorio Ybarra"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="youtube-video"
              ></iframe>
            </div>
            <h3 className="video-title">Video Gregorio Ybarra</h3>
            <p className="video-description">SINERGIA. Proyecto generacional. II edicion. Asociación Gregorio Ybarra.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;