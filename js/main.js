// Flip card function
function flipCard() {
    document.getElementById('messageCard').classList.toggle('is-flipped');
    // Ensure music starts on first tap (especially for mobile browsers)
    if (bgm && bgm.paused) {
        bgm.play().catch(() => {});
    }
}

// Background music (try autoplay; if blocked, play on first user gesture)
const bgm = document.getElementById('bgm');

async function tryPlayBgm() {
    if (!bgm) return;
    try {
        await bgm.play();
    } catch (_) {
        // Autoplay blocked: wait for first user interaction
        const resume = async () => {
            try {
                await bgm.play();
            } catch (_) {}
            window.removeEventListener('pointerdown', resume);
            window.removeEventListener('touchstart', resume);
            window.removeEventListener('keydown', resume);
        };
        window.addEventListener('pointerdown', resume, { once: true });
        window.addEventListener('touchstart', resume, { once: true });
        window.addEventListener('keydown', resume, { once: true });
    }
}

// Kick off as soon as possible
tryPlayBgm();

// Floating hearts while music is playing
function createHeart() {
    if (!bgm || bgm.paused) return;
    const heart = document.createElement('span');
    heart.className = 'heart material-icons';
    heart.textContent = 'favorite';

    const left = Math.random() * 80 + 10; // between 10% and 90%
    const size = Math.random() * (32 - 18) + 18;
    heart.style.left = `${left}%`;
    heart.style.fontSize = `${size}px`;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Create hearts every few seconds when music is playing
setInterval(createHeart, 2000);

// Generate falling petals
const petalContainer = document.getElementById('petal-container');
const petalIcons = ['favorite', 'spa', 'filter_vintage'];

function createPetal() {
    const petal = document.createElement('div');
    const icon = petalIcons[Math.floor(Math.random() * petalIcons.length)];
    petal.className = 'petal material-icons';
    petal.innerHTML = icon;

    // Random properties
    const size = Math.random() * (24 - 12) + 12;
    const left = Math.random() * 100;
    const duration = Math.random() * (15 - 7) + 7;
    const delay = Math.random() * 5;

    petal.style.fontSize = `${size}px`;
    petal.style.left = `${left}%`;
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `-${delay}s`;
    petal.style.animationName = 'fall';
    petal.style.animationIterationCount = 'infinite';
    petal.style.animationTimingFunction = 'linear';

    petalContainer.appendChild(petal);

    // Clean up old petals to prevent memory leaks in a long session
    if (petalContainer.children.length > 50) {
        petalContainer.removeChild(petalContainer.children[0]);
    }
}

// Create initial batch of petals
for (let i = 0; i < 20; i++) {
    createPetal();
}

// Add more petals over time
setInterval(createPetal, 2000);

