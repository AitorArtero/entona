import React from 'react';
import './../styles/NavBar.css';
import "./../styles/global.css";

export function NavBar({ isOpen, onToggle }) {
    return (
        <>
            {/* Botón del Menú */}
            <button 
                className={`menu-button ${isOpen ? 'nav-open' : ''}`} 
                aria-label="Menú" 
                onClick={onToggle}
            >
            {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#a5b4e3" className="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            )}
            </button>

            {/* Menú de Navegación */}
            <nav className={`navbar ${isOpen ? 'open' : ''}`}>
                <div className="navbar-content">
                    {/* Logo */}
                    <div className="nav-logo">
                        <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            entona
                        </a>
                    </div>
                    
                    {/* Enlaces de navegación */}
                    <ul className="nav-links">
                        <li><a href="/about">¿Qué es entona?</a></li>
                        <li><a href="#practice">Buenas prácticas</a></li>
                        <li><a href="/gallery">Galería</a></li>
                    </ul>

                    {/* Botones */}
                    <div className="nav-buttons">
                        <a href="/simulator" className="primary-button-a">
                            Entona simulator
                        </a>
                        <a href="/test" className="primary-button-b">
                            Ponte a prueba
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;