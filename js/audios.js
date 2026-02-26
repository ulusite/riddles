function play(audioCtx, type, frequency, duration, volume) {
    // Parameter validation
    if (!audioCtx) {
        console.error('AudioContext is required');
        return;
    }

    // Default parameters with more options
    type = type || 'sine'; // sine, square, sawtooth, triangle
    duration = Math.max(1, duration || 100);
    frequency = Math.max(20, Math.min(frequency || 440, 20000)); // Human hearing range
    volume = Math.max(0, Math.min(volume || 100, 100));

    return new Promise((resolve, reject) => {
        try {
            const oscillatorNode = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();

            // Connect nodes
            oscillatorNode.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            // Add fade in/out for smoother sound
            const fadeTime = Math.min(15, duration * 0.1);
            gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
            gainNode.gain.linearRampToValueAtTime(volume * 0.01, audioCtx.currentTime + fadeTime * 0.001);
            gainNode.gain.setValueAtTime(volume * 0.01, audioCtx.currentTime + (duration - fadeTime) * 0.001);
            gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration * 0.001);

            // Configure oscillator
            oscillatorNode.frequency.value = frequency;
            oscillatorNode.type = type;

            // Cleanup
            oscillatorNode.onended = () => {
                oscillatorNode.disconnect();
                gainNode.disconnect();
                resolve();
            };

            // Play sound
            oscillatorNode.start(audioCtx.currentTime);
            oscillatorNode.stop(audioCtx.currentTime + duration * 0.001);
        } catch(error) {
            console.error(`Failed to play '${type}', error: ${error}`);
            resolve();
        }
    });
}

async function playWarn(audioCtx) {
    await play(audioCtx, 'sawtooth', 600, 80);
    await play(audioCtx, 'sawtooth', 500, 50);
}

async function playBeep(audioCtx) {
    await play(audioCtx, 'sawtooth', 440);
}

async function playHint(audioCtx) {
    await play(audioCtx, 'triangle', 440, 80);
}

async function playTada(audioCtx) {
    await play(audioCtx, 'triangle', 200, 60);
    await play(audioCtx, 'triangle', 340, 70);
    await play(audioCtx, 'triangle', 480, 80);
    await play(audioCtx, 'triangle', 530, 180);
}
