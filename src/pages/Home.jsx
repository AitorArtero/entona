import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Home.css";
import "./../styles/global.css";

export function Home() {
    const navigate = useNavigate();

    const goToSimulator = () => {
      navigate("/simulator");
  };

    return (
            <div className="content">
                <div className="logo-section">
                    <h1>entona</h1>
                    <p className="tagline">
                        Una experiencia auditiva,
                        <br />
                        <span className="highlight">infinita</span> en sus formas.
                    </p>
                </div>

                <div className="simulator-section">
                    <button className="simulator-button" onClick={goToSimulator}>
                        <span>SIMULADOR</span>
                    </button>
                </div>

                <div className="cta-section">
                    <p>Si has probado el simulador...</p>
                    <button className="primary-button">Ponte a prueba</button>
                </div>
            </div>
    );
}

export default Home;