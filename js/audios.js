function play(audioCtx, type, frequency, duration) {
    // Parameter validation
    if (!audioCtx) {
        console.error('AudioContext is required');
        return;
    }

    // Default parameters with more options
    type = type || 'sine'; // sine, square, sawtooth, triangle
    duration = Math.max(1, duration || 100);
    frequency = Math.max(20, Math.min(frequency || 440, 20000)); // Human hearing range

    const volume = 100;

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

// high tone; not used
// async function playHighTone(audioCtx) {
//     await play(audioCtx, 'sawtooth', 500, 80);
// }

// plays when wrong answer is submitted or question bypassed
async function playMidTone(audioCtx) {
    await play(audioCtx, 'triangle', 500);
}

// plays when warning or hint is displayed
async function playSoftTone(audioCtx) {
    await play(audioCtx, 'sine', 440);
}

// plays when correct answer is submitted
async function playTada(audioCtx) {
    await play(audioCtx, 'triangle', 340, 70);
    await play(audioCtx, 'triangle', 480, 80);
    await play(audioCtx, 'triangle', 530, 180);
}

async function playWin(audioCtx) {
    await play(audioCtx, 'sine', 480, 110);
    await play(audioCtx, 'sine', 330, 100);
    await play(audioCtx, 'triangle', 400, 130);
    await play(audioCtx, 'triangle', 450, 150);
    await play(audioCtx, 'triangle', 500, 180);
    await play(audioCtx, 'triangle', 480, 190);
    await play(audioCtx, 'sine', 440, 200);
    await play(audioCtx, 'sine', 400, 190);
    await play(audioCtx, 'sine', 330, 190);
}

async function playSad(audioCtx) {
    await play(audioCtx, 'triangle', 515, 400);
    await play(audioCtx, 'triangle', 500, 450);
    await play(audioCtx, 'triangle', 450, 500);
    await play(audioCtx, 'triangle', 420, 550);
}

function playGameOver(audioCtx, audioId) {
    if (audioId === 'win') {
        playWin(audioCtx);
    } else {
        playSad(audioCtx);
    }
}