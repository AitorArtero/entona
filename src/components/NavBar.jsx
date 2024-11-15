import React from 'react';
import './../styles/NavBar.css';

export function NavBar({ isOpen, onToggle }) {
    return (
        <>
            <button 
                className={`menu-button ${isOpen ? 'nav-open' : ''}`} 
                aria-label="Menú" 
                onClick={onToggle}
            >
            {isOpen ? (
                // Ícono de "cerrar" cuando el menú está abierto
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#a5b4e3" className="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                // Ícono de "hamburguesa" cuando el menú está cerrado
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            )}
            </button>

            <nav className={`navbar ${isOpen ? 'open' : ''}`}>
                <div className="nav-logo">
                    entona
                </div>
                <ul>
                    <li><a href="#home">¿Qué es entona?</a></li>
                    <li><a href="#practice">Buenas prácticas</a></li>
                    <li><a href="#gallery">Galería</a></li>
                    <li><a href="/simulator">Entona simulator</a></li>
                    <li><a href="/test">Ponte a prueba</a></li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;