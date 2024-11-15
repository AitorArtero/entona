export function AudioControls() {
    const { isProcessing, startAudioProcessing, stopAudioProcessing } = useAudioProcessor();
  
    const handleClick = () => {
      if (!isProcessing) {
        startAudioProcessing();
      } else {
        stopAudioProcessing();
      }
    };
  
    return (
      <button 
        onClick={handleClick}
        className="simulator-button"
        aria-label={isProcessing ? 'Detener simulador' : 'Iniciar simulador'}
      >
        <span>{isProcessing ? 'DETENER' : 'SIMULADOR'}</span>
      </button>
    );
  }
  