import React from 'react';
import { AudioControls } from '../components/AudioControls';
import { NavBar } from '../components/NavBar';

export function Simulator() {
  return (
    <div className="simulator-page">
      <NavBar />
      <div className="simulator-header">
        <h1>entona</h1>
        <p className="tagline">
          Una experiencia auditiva,{' '}
          <span className="highlight">infinita</span> en sus formas.
        </p>
      </div>
      <div className="simulator-content">
        <AudioControls />
      </div>
      <div className="cta-section">
        <p>Si has probado el simulador...</p>
        <button className="test-button">Ponte a prueba</button>
      </div>
    </div>
  );
}
