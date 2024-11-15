import React from 'react';
import { NavBar } from './NavBar';

export function Base_Template({ children }) {
    return (
        <>
            <NavBar />
            <main>{children}</main>
        </>
    );
}

export default Base_Template;
