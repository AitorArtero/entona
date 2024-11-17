import React, { useState } from 'react';
import { NavBar } from './NavBar';

export function Base_Template({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <NavBar isOpen={isMenuOpen} onToggle={toggleMenu} />
            <main>{children}</main>
        </>
    );
}

export default Base_Template;