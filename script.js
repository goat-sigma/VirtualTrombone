const slidePositions = {
    '1': 'pos1', '2': 'pos2', '3': 'pos3', '4': 'pos4', 
    '5': 'pos5', '6': 'pos6', '7': 'pos7'
};

const embouchureLevels = {
    'q': 'level1', 'w': 'level2', 'e': 'level3', 
    'r': 'level4', 't': 'level5'
};

let currentSlide = 'pos1';
let currentEmbouchure = 'none';

const audioMap = {
    'pos1_none': 'sounds/pos1_none.mp3',
    'pos1_level1': 'sounds/pos1_level1.mp3',
    'pos1_level2': 'sounds/pos1_level2.mp3',
    'pos1_level3': 'sounds/pos1_level3.mp3',
    'pos1_level4': 'sounds/pos1_level4.mp3',
    'pos1_level5': 'sounds/pos1_level5.mp3',
    'pos2_none': 'sounds/pos2_none.mp3',
    // Add all other combinations...
};

function playNote() {
    const noteKey = `${currentSlide}_${currentEmbouchure}`;
    const soundFile = audioMap[noteKey];
    if (soundFile) {
        const audio = new Audio(soundFile);
        audio.play();
        document.getElementById('display').innerText = `Playing: ${noteKey}`;
    }
}

document.addEventListener('keydown', (event) => {
    if (slidePositions[event.key]) {
        currentSlide = slidePositions[event.key];
    } else if (embouchureLevels[event.key]) {
        currentEmbouchure = embouchureLevels[event.key];
    }
    playNote();
});
