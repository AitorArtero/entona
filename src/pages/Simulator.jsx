import React, { useState } from 'react';
import { useAudioProcessor } from '../hooks/useAudioProcessor';
import '../styles/Simulator.css';

export function Simulator() {
    const [hasHeadphones, setHasHeadphones] = useState(false);
    const [hearingLevel, setHearingLevel] = useState('moderado');
    const [isRecording, setIsRecording] = useState(false);
    const { startAudioProcessing, stopAudioProcessing } = useAudioProcessor({
        hearingLevel,
        hasHeadphones
    });

    const handleHearingLevelChange = (event) => {
        const value = parseInt(event.target.value);
        switch(value) {
            case 0:
                setHearingLevel('leve');
                break;
            case 1:
                setHearingLevel('moderado');
                break;
            case 2:
                setHearingLevel('grave');
                break;
            case 3:
                setHearingLevel('profundo');
                break;
            default:
                setHearingLevel('moderado');
        }
    };

    const handleMicrophoneClick = async () => {
        if (!isRecording) {
            try {
                await startAudioProcessing();
                setIsRecording(true);
            } catch (error) {
                console.error('Error al iniciar la grabación:', error);
            }
        } else {
            stopAudioProcessing();
            setIsRecording(false);
        }
    };

    return (            
        <div className="simulator-container">
            {/* App title */}
            <div className="app-title">
                <span>entona</span>
            </div>

            {/* Main title */}
            <h1 className="main-title">
                <span className="title-entona">entona</span>
                <span className="title-simulator">simulator</span>
            </h1>
            
            {/* Botones de audífono */}
            <div className="headphone-toggle">
                <button 
                    className={`toggle-button ${!hasHeadphones ? 'active' : ''}`}
                    onClick={() => setHasHeadphones(false)}
                >
                    Sin audífono
                </button>
                <button 
                    className={`toggle-button ${hasHeadphones ? 'active' : ''}`}
                    onClick={() => setHasHeadphones(true)}
                >
                    Con audífono
                </button>
            </div>

            {/* Selector de nivel de audición */}
            <div className="hearing-level-container">
                <input
                    type="range"
                    min="0"
                    max="3"
                    value={
                        hearingLevel === 'leve' ? 0 :
                        hearingLevel === 'moderado' ? 1 :
                        hearingLevel === 'grave' ? 2 : 3
                    }
                    onChange={handleHearingLevelChange}
                    step="1"
                    className="hearing-level-slider"
                />
                <div className="hearing-level-labels">
                    <span className={hearingLevel === 'leve' ? 'active' : ''}>Leve</span>
                    <span className={hearingLevel === 'moderado' ? 'active' : ''}>Moderado</span>
                    <span className={hearingLevel === 'grave' ? 'active' : ''}>Grave</span>
                    <span className={hearingLevel === 'profundo' ? 'active' : ''}>Profundo</span>
                </div>
            </div>
                
            {/* Botón de micrófono */}
            <button 
            className={`mic-button ${isRecording ? 'recording' : ''}`}
            onClick={handleMicrophoneClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                </svg>
            </button>
                
            {/* Texto informativo */}
            <div className="info-text-container">
                <div className="info-text">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                    </svg>
                    <span>Para una experiencia más inmersiva utilice auriculares</span>
                </div>
            </div>
        </div>
    );
}

export default Simulator;