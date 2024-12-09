// GoodPractices.jsx
import React, { useState, useRef } from 'react';
import '../styles/GoodPractices.css';

export function GoodPractices() {
  const [currentCard, setCurrentCard] = useState(0);
  const cardsContainer = useRef(null);
  const startX = useRef(null);
  const TOTAL_CARDS = 5;

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!startX.current) return;
    const currentX = e.touches[0].clientX;
    const diff = startX.current - currentX;
    if (Math.abs(diff) > 5) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e) => {
    if (!startX.current) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentCard < TOTAL_CARDS - 1) {
        setCurrentCard(prev => prev + 1);
      } else if (diff < 0 && currentCard > 0) {
        setCurrentCard(prev => prev - 1);
      }
    }
    startX.current = null;
  };

  const cards = [
    {
      color: 'pastel-blue',
      title: '¡Pregunta!',
      titleNumber: 1,
      content: (
        <div className="card-content">
          <p>Cada persona con diversidad auditiva es única, y sus experiencias varían. Si quieres mejorar tu comunicación, preguntales directamente:</p>
          <div className="image-text-container">
            <img src="./../../public/images/image1.png" alt="Comunicación inclusiva" />
            <p className="highlighted-text">
              ¿Qué puedo hacer para facilitarte las cosas?<br/><br/>
              Escuchar sus necesidades es el primer paso para apoyarles mejor.
            </p>
          </div>
        </div>
      )
    },
    {
      color: 'pastel-red',
      content: (
        <div className="card-content">
          <div className="section">
            <h3><span className="card-number pastel-red">2</span>No te tapes la boca</h3>
            <p>Muchas personas dependen de la lectura de labios para entender mejor lo que dices. Si te cubres la boca al hablar, dificultas esta forma de comunicación.</p>
          </div>
          <div className="section">
            <h3><span className="card-number pastel-yellow">3</span>No des la espalda</h3>
            <p>Mantén el contacto visual y asegúrate de estar de frente al comunicarte. Esto facilita la lectura de labios y la interpretación de expresiones faciales.</p>
          </div>
          <img src="./../../public/images/image2.png" alt="Buenas prácticas de comunicación" />
        </div>
      )
    },
    {
      color: 'pastel-blue',
      title: 'Sensibilízate con el ruido',
      titleNumber: 4,
      content: (
        <div className="card-content">
          <p>El ruido ambiental puede ser un gran obstáculo. Intenta reducir el ruido de fondo siempre que sea posible, y elige lugares tranquilos para hablar.</p>
          <img src="./../../public/images/image3.png" alt="Sensibilización auditiva" />
        </div>
      )
    },
    {
      color: 'pastel-red',
      title: '¡Conciénciate!',
      titleNumber: 5,
      content: (
        <div className="card-content">
          <p>La inclusión comienza con la conciencia. Asegúrate de considerar a las personas con diversidad auditiva en tus acciones y decisiones, ya sea al organizar eventos, planificar espacios o establecer canales de comunicación.</p>
        </div>
      )
    },
    {
      color: 'pastel-yellow',
      content: (
        <div className="card-content thank-you">
          <div className="thank-you-text">
            <h2>
              <span className="pastel-red">¡</span>
              MUCHAS
            </h2>
            <h2>
              GRACIAS
              <span className="pastel-yellow">!</span>
            </h2>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="good-practices">
      <header className="good-practices-header">
        <h1 className="good-practices-title">¿QUÉ PUEDO HACER?</h1>
        <p className="good-practices-subtitle">
          Una guía para incluir a las personas con diversidad auditiva
        </p>
      </header>

      <div 
        className="cards-viewport"
        ref={cardsContainer}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="cards-slider"
          style={{ transform: `translateX(-${currentCard * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="card">
            {card.title && (
              <h2>
                <span className={`card-number ${card.color}`}>{card.titleNumber}</span>
                {card.title}
              </h2>
            )}
            {card.content}
            </div>
          ))}
        </div>
      </div>

      <div className="cards-navigation">
        {[...Array(TOTAL_CARDS)].map((_, index) => (
          <button
            key={index}
            className={`nav-dot ${currentCard === index ? 'active' : ''}`}
            onClick={() => setCurrentCard(index)}
            aria-label={`Ir a la carta ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default GoodPractices;