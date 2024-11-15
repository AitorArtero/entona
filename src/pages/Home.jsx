import React, { useState } from "react";
import { NavBar } from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import "./../styles/global.css";

export function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const goToSimulator = () => {
      navigate("/simulator");
  };

    return (
        <>
            <NavBar isOpen={isMenuOpen} onToggle={toggleMenu} />
            
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
                    <button className="test-button">Ponte a prueba</button>
                </div>
            </div>
        </>
    );
}

export default Home;