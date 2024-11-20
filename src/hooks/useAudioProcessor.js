import { useState, useCallback, useEffect, useRef } from 'react';

export const useAudioProcessor = ({ hearingLevel, hasHeadphones }) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const audioContextRef = useRef(null);
    const streamRef = useRef(null);
    const nodesRef = useRef({});

    const getAudioParams = useCallback(() => {
        // Parámetros según el nivel de audición
        const params = {
            leve: {
                lowpassFreq: 2000,
                gain: hasHeadphones ? 0.8 : 0.6
            },
            moderado: {
                lowpassFreq: 1500,
                gain: hasHeadphones ? 0.6 : 0.4
            },
            grave: {
                lowpassFreq: 1000,
                gain: hasHeadphones ? 0.4 : 0.2
            },
            profundo: {
                lowpassFreq: 500,
                gain: hasHeadphones ? 0.2 : 0.1
            }
        };
        return params[hearingLevel] || params.moderado;
    }, [hearingLevel, hasHeadphones]);

    const updateAudioNodes = useCallback(() => {
        if (!nodesRef.current.gainNode || !nodesRef.current.filterNode) return;

        const params = getAudioParams();
        nodesRef.current.gainNode.gain.setValueAtTime(
            params.gain,
            audioContextRef.current.currentTime
        );
        nodesRef.current.filterNode.frequency.setValueAtTime(
            params.lowpassFreq,
            audioContextRef.current.currentTime
        );
    }, [getAudioParams]);

    useEffect(() => {
        if (isProcessing) {
            updateAudioNodes();
        }
    }, [hearingLevel, hasHeadphones, isProcessing, updateAudioNodes]);

    const startAudioProcessing = useCallback(async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const context = new (window.AudioContext || window.webkitAudioContext)();
            
            const sourceNode = context.createMediaStreamSource(stream);
            const gainNode = context.createGain();
            const filterNode = context.createBiquadFilter();
            const compressor = context.createDynamicsCompressor();

            // Configurar nodos
            filterNode.type = "lowpass";
            const params = getAudioParams();
            gainNode.gain.value = params.gain;
            filterNode.frequency.value = params.lowpassFreq;

            // Configurar compresor
            compressor.threshold.value = -50;
            compressor.knee.value = 40;
            compressor.ratio.value = 12;
            compressor.attack.value = 0;
            compressor.release.value = 0.25;

            // Conectar nodos
            sourceNode.connect(filterNode);
            filterNode.connect(gainNode);
            gainNode.connect(compressor);
            compressor.connect(context.destination);

            // Guardar referencias
            audioContextRef.current = context;
            streamRef.current = stream;
            nodesRef.current = {
                sourceNode,
                gainNode,
                filterNode,
                compressor
            };

            setIsProcessing(true);
        } catch (error) {
            console.error('Error al iniciar el audio:', error);
            throw error; // Re-lanzar el error para manejarlo en el componente
        }
    }, [getAudioParams]);

    const stopAudioProcessing = useCallback(() => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
        }
        if (audioContextRef.current) {
            audioContextRef.current.close();
        }
        
        // Limpiar referencias
        audioContextRef.current = null;
        streamRef.current = null;
        nodesRef.current = {};
        
        setIsProcessing(false);
    }, []);

    return {
        isProcessing,
        startAudioProcessing,
        stopAudioProcessing
    };
};