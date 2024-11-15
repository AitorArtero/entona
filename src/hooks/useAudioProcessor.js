import { useState, useCallback } from 'react';

export const useAudioProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [audioContext, setAudioContext] = useState(null);
  const [mediaStream, setMediaStream] = useState(null);

  const startAudioProcessing = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const context = new (window.AudioContext || window.webkitAudioContext)();
      
      const sourceNode = context.createMediaStreamSource(stream);
      const gainNode = context.createGain();
      const lowpassFilter = context.createBiquadFilter();

      // Configurar efectos
      gainNode.gain.value = 0.5;
      lowpassFilter.type = "lowpass";
      lowpassFilter.frequency.value = 1000;

      // Conectar nodos
      sourceNode.connect(gainNode);
      gainNode.connect(lowpassFilter);
      lowpassFilter.connect(context.destination);

      setAudioContext(context);
      setMediaStream(stream);
      setIsProcessing(true);
    } catch (error) {
      console.error('Error al iniciar el audio:', error);
    }
  }, []);

  const stopAudioProcessing = useCallback(() => {
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => track.stop());
    }
    if (audioContext) {
      audioContext.close();
    }
    setAudioContext(null);
    setMediaStream(null);
    setIsProcessing(false);
  }, [mediaStream, audioContext]);

  return {
    isProcessing,
    startAudioProcessing,
    stopAudioProcessing
  };
};
