// ===================================
// STATE & CONFIG
// ===================================

let compartmentsOpened = 0;
const totalCompartments = 8;
let wheelSpinning = false;

// Placeholder data - you can customize these!
const twentyThingsData = {
    reasons: [
        "Your smile lights up my world",
        "The way you laugh at my jokes (at least sometimes)",
        "How you always ask for hugs",
        "Your incredible creativity with all the gifts you give",
        "The way you make handmade cards with so much love",
        "You say the funniest things sometimes",
        "How you come to church with me",
        "Your passion for the things you love",
        "The way you giggle when you're happy",
        "Your thoughtfulness in everything you do",
        "How you get all excited to see me",
        "How you bite your finger when you're nervous",
        "The way you inspire me to be better",
        "Your 'gorgus' face",
        "How you turn ordinary days into special ones",
        "How you talk a lot",
        "The way you care for others",
        "How you get all embarrassed when I call you baby",
        "How you make me feel like the luckiest person alive",
        "Simply being YOU - exactly as you are"
    ],
    future: [
        "Waking up next to you every morning",
        "Building our dream home together (even though we be moving around)",
        "Traveling through the military",
        "Growing old and silly together",
        "Adopting a pet (maybe a fish, we'll see)",
        "Sunday morning church",
        "Celebrating every milestone, big and small",
        "Creating our own family traditions (we should start some)",
        "Late-night deep conversations forever",
        "Cooking together",
        "Supporting each other's dreams",
        "Learning new things together",
        "Making each other laugh",
        "Quiet evenings reading the Word side by side",
        "Anniversary trips when??",
        "Building a life full of love and laughter",
        "Creating new memories together",
        "Going on spontaneous dates",
        "Being your forever partner in everything",
        "Matching outfits (you just copy me honestly)"
    ],
    dates: [
        "Sunset picnic in the park with homemade food (hopefully while we're still in Hawaii)",
        "Cozy movie night with a blanket fort (when we live together)",
        "Take some sort of class together",
        "Stargazing on a camping trip with hot chocolate",
        "Visit an art museum and take those cute pics",
        "Cook a fancy dinner together at home (when we live together)",
        "Go thrift shopping and find new fits",
        "Working out together",
        "Beach day and sunset -- I get to bury you in sand",
        "Bookstore browsing followed by coffee shop date",
        "Hiking in the wild",
        "Ice skating!! I can't believe we never went ice palace",
        "Have a painting night at home",
        "Go to a live concert or music festival",
        "Plan a surprise day trip somewhere",
        "Have a game night with our favorite snacks",
        "Take photos at golden hour in nature",
        "We go eat at Sikdorak",
        "Worship sesh at the beach",
        "Being lazy and doing nothing at home"
    ]
};

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initializeCover();
    initializePullTabs();
    initializeFlipPanels();
    initializeDieCuts();
    initializeAccordions();
    initializeScratchCards(); // tap-to-reveal version
    initializeMagnetLocks();
    initializeRibbonLocks();
    initializeNotebookPages();
    initializeSliderPuzzle();
    initializeTwentyThingsWheel();
    initializeEnvelope();
});

// ===================================
// COVER & CONFETTI
// ===================================
function initializeCover() {
    const cover = document.getElementById('cover');
    if (!cover) return;
    const cardFront = cover.querySelector('.card-front');
    if (!cardFront) return;

    cardFront.addEventListener('click', openCard);
}

function openCard() {
    const cover = document.getElementById('cover');
    const cardInterior = document.getElementById('card-interior');
    if (!cover || !cardInterior) return;

    cover.classList.add('opening');
    createConfetti();

    setTimeout(() => {
        cover.classList.add('hidden');
        cardInterior.classList.remove('hidden');
    }, 800);
}

function createConfetti() {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    const colors = ['#A4B494', '#7A8A6F', '#8B7355', '#D4C5B0'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';

        if (Math.random() > 0.5) confetti.style.borderRadius = '50%';

        container.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}

// ===================================
// PULL TABS
// ===================================
function initializePullTabs() {
    const pullTabs = document.querySelectorAll('.pull-tab');
    pullTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tab.classList.add('pulled');
            checkCompartmentOpened(tab.closest('.compartment'));
        });
    });
}

// ===================================
// FLIP PANELS
// ===================================
function initializeFlipPanels() {
    const flipPanels = document.querySelectorAll('.flip-panel');
    flipPanels.forEach(panel => {
        panel.addEventListener('click', () => {
            panel.classList.toggle('flipped');
            if (panel.classList.contains('flipped')) {
                checkCompartmentOpened(panel.closest('.compartment'));
            }
        });
    });
}

// ===================================
// DIE-CUT HEARTS
// ===================================
function initializeDieCuts() {
    const dieCuts = document.querySelectorAll('.die-cut-heart');
    dieCuts.forEach(heart => {
        heart.addEventListener('mouseenter', () => {
            heart.classList.add('revealed');
        });
        heart.addEventListener('click', () => {
            heart.classList.add('revealed');
            checkCompartmentOpened(heart.closest('.compartment'));
        });
        heart.addEventListener('mouseleave', () => {
            if (!heart.closest('.compartment').classList.contains('opened')) {
                setTimeout(() => heart.classList.remove('revealed'), 300);
            }
        });
    });
}

// ===================================
// ACCORDIONS
// ===================================
function initializeAccordions() {
    const accordions = document.querySelectorAll('.accordion-pocket');
    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        if (!header) return;
        header.addEventListener('click', () => {
            accordion.classList.toggle('expanded');
            if (accordion.classList.contains('expanded')) {
                checkCompartmentOpened(accordion.closest('.compartment'));
            }
        });
    });
}

// ===================================
// SCRATCH CARDS (Tap-to-Reveal Only)
// ===================================
function initializeScratchCards() {
    const scratchContainers = document.querySelectorAll('.scratch-container');

    scratchContainers.forEach(container => {
        const canvas = container.querySelector('.scratch-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const rect = container.getBoundingClientRect();

        // Size canvas to container (basic sizing; if container is hidden at init, consider re-running on show)
        canvas.width = Math.max(1, Math.floor(rect.width));
        canvas.height = Math.max(1, Math.floor(rect.height));

        // Draw cover layer
        ctx.fillStyle = '#C9B8A0';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Prompt text
        ctx.fillStyle = '#7A8A6F';
        ctx.font = '20px "Dancing Script", cursive';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Tap to reveal ✨', canvas.width / 2, canvas.height / 2);

        const revealAll = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            canvas.style.opacity = '0';           // fade if CSS transition exists
            canvas.style.pointerEvents = 'none';  // stop further input
            checkCompartmentOpened(container.closest('.compartment'));
        };

        // Click (desktop)
        canvas.addEventListener('click', revealAll);

        // Touch (mobile)
        canvas.addEventListener('touchstart', () => {
            revealAll();
        }, { passive: true });
    });
}

// ===================================
// MAGNET LOCKS
// ===================================
function initializeMagnetLocks() {
    const magnetLocks = document.querySelectorAll('.magnet-lock');
    magnetLocks.forEach(lock => {
        lock.addEventListener('click', () => {
            lock.classList.add('unlocked');
            checkCompartmentOpened(lock.closest('.compartment'));
        });
    });
}

// ===================================
// RIBBON LOCKS
// ===================================
function initializeRibbonLocks() {
    const ribbonLocks = document.querySelectorAll('.ribbon-lock');
    ribbonLocks.forEach(lock => {
        const bow = lock.querySelector('.ribbon-bow');
        if (!bow) return;

        let holdTimer = null;

        bow.addEventListener('mousedown', startUntying);
        bow.addEventListener('touchstart', startUntying, { passive: false });

        bow.addEventListener('mouseup', stopUntying);
        bow.addEventListener('touchend', stopUntying);
        bow.addEventListener('mouseleave', stopUntying);

        function startUntying(e) {
            e.preventDefault();
            bow.classList.add('untying');
            holdTimer = setTimeout(() => {
                lock.classList.add('untied');
                bow.classList.remove('untying');
                checkCompartmentOpened(lock.closest('.compartment'));
            }, 1500);
        }

        function stopUntying() {
            bow.classList.remove('untying');
            if (holdTimer) {
                clearTimeout(holdTimer);
                holdTimer = null;
            }
        }
    });
}

// ===================================
// NOTEBOOK TEAR-OUT
// ===================================
function initializeNotebookPages() {
    const notebookPages = document.querySelectorAll('.notebook-page');
    notebookPages.forEach(page => {
        page.addEventListener('click', () => {
            if (!page.classList.contains('torn')) {
                page.classList.add('torn');
                const keepsake = page.parentElement.querySelector('.keepsake-pile');
                if (!keepsake) return;

                setTimeout(() => {
                    keepsake.classList.add('visible');
                    checkCompartmentOpened(page.closest('.compartment'));
                }, 1000);
            }
        });
    });
}

// ===================================
// SLIDER PUZZLE
// ===================================
function initializeSliderPuzzle() {
    const puzzle = document.getElementById('slider-puzzle');
    if (!puzzle) return;

    const tiles = puzzle.querySelectorAll('.puzzle-tile');
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            const emptyTile = puzzle.querySelector('.puzzle-tile:empty');
            if (!emptyTile) return;

            const tilePos = parseInt(tile.dataset.position);
            const emptyPos = parseInt(emptyTile.dataset.position);

            // Adjacent (simple 3-wide grid logic)
            if (Math.abs(tilePos - emptyPos) === 1 || Math.abs(tilePos - emptyPos) === 3) {
                const tempContent = tile.textContent;
                tile.textContent = emptyTile.textContent;
                emptyTile.textContent = tempContent;
                checkPuzzleSolved();
            }
        });
    });

    function checkPuzzleSolved() {
        const tilesNow = Array.from(puzzle.querySelectorAll('.puzzle-tile'));
        const values = tilesNow.map(t => t.textContent);
        if (values.join('') === '20') {
            setTimeout(() => {
                const solved = puzzle.querySelector('.puzzle-solution');
                if (solved) solved.classList.remove('hidden');
                setTimeout(() => {
                    puzzle.classList.add('hidden');
                    showTwentyThings();
                }, 3000);
            }, 500);
        }
    }
}

// ===================================
// 20 THINGS WHEEL
// ===================================
function initializeTwentyThingsWheel() {
    const spinBtn = document.querySelector('.spin-btn');
    const wheel = document.querySelector('.wheel');
    const thingsDisplay = document.querySelector('.things-display');
    const spinAgainBtn = document.querySelector('.spin-again-btn');

    // If the wheel UI isn't on this page/section, bail safely
    if (!spinBtn || !wheel || !thingsDisplay || !spinAgainBtn) return;

    spinBtn.addEventListener('click', spinWheel);
    spinAgainBtn.addEventListener('click', () => {
        thingsDisplay.classList.add('hidden');
        spinBtn.disabled = false;
    });

    function spinWheel() {
        if (wheelSpinning) return;

        wheelSpinning = true;
        spinBtn.disabled = true;

        const spins = 5 + Math.random() * 3;
        const randomDegree = Math.random() * 360;
        const totalRotation = (spins * 360) + randomDegree;

        wheel.style.transform = `rotate(${totalRotation}deg)`;

        setTimeout(() => {
            wheelSpinning = false;

            const normalizedDegree = totalRotation % 360;
            let category;
            if (normalizedDegree >= 0 && normalizedDegree < 120) {
                category = 'reasons';
            } else if (normalizedDegree >= 120 && normalizedDegree < 240) {
                category = 'future';
            } else {
                category = 'dates';
            }
            displayTwentyThings(category);
        }, 3000);
    }

    function displayTwentyThings(category) {
        const titles = {
            reasons: '20 Reasons I Love You 💕',
            future: '20 Things I Look Forward To 🌟',
            dates: '20 Date Ideas for Us 💝'
        };

        const categoryTitle = document.querySelector('.things-category-title');
        const thingsList = document.querySelector('.things-list');
        if (!categoryTitle || !thingsList) return;

        categoryTitle.textContent = titles[category];
        thingsList.innerHTML = '';

        const items = twentyThingsData[category] || [];
        items.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'thing-item';
            div.style.setProperty('--item-index', index);
            div.innerHTML = `<span class="thing-number">${index + 1}</span>${item}`;
            thingsList.appendChild(div);
        });

        thingsDisplay.classList.remove('hidden');

        setTimeout(() => {
            initializeLetterButton();
        }, 500);
    }
}

function showTwentyThings() {
    const twentyThings = document.getElementById('twenty-things');
    const cardInterior = document.getElementById('card-interior');
    if (!twentyThings || !cardInterior) return;

    cardInterior.classList.add('hidden');
    twentyThings.classList.remove('hidden');
}

// ===================================
// ENVELOPE
// ===================================
function initializeEnvelope() {
    const envelope = document.querySelector('.envelope');
    if (!envelope) return;

    envelope.addEventListener('click', () => {
        envelope.classList.toggle('opened');
    });
}

// ===================================
// COMPARTMENT TRACKING
// ===================================
function checkCompartmentOpened(compartment) {
    if (!compartment || compartment.classList.contains('opened')) return;

    compartment.classList.add('opened');
    compartmentsOpened++;

    if (compartmentsOpened >= totalCompartments) {
        setTimeout(showCenterPopup, 1000);
    }
}

function showCenterPopup() {
    const popup = document.getElementById('center-popup');
    if (!popup) return;
    const continueBtn = popup.querySelector('.continue-btn');
    if (!continueBtn) return;

    popup.classList.remove('hidden');

    continueBtn.addEventListener('click', () => {
        popup.classList.add('hidden');
        const sliderPuzzle = document.getElementById('slider-puzzle');
        if (sliderPuzzle) sliderPuzzle.classList.remove('hidden');
    });
}

// ===================================
// FINAL LETTER
// ===================================
function showFinalLetter() {
    const twentyThings = document.getElementById('twenty-things');
    const finalLetter = document.getElementById('final-letter');
    if (!twentyThings || !finalLetter) return;

    const backBtn = finalLetter.querySelector('.back-to-card-btn');

    twentyThings.classList.add('hidden');
    finalLetter.classList.remove('hidden');

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            finalLetter.classList.add('hidden');
            const interior = document.getElementById('card-interior');
            if (interior) interior.classList.remove('hidden');
        });
    }
}

// Initialize letter button when things display is shown
function initializeLetterButton() {
    const thingsDisplay = document.querySelector('.things-display');
    if (!thingsDisplay) return;

    let letterBtn = thingsDisplay.querySelector('.letter-btn');
    if (!letterBtn) {
        letterBtn = document.createElement('button');
        letterBtn.className = 'continue-btn letter-btn';
        letterBtn.textContent = 'Continue to Your Letter →';
        letterBtn.style.marginTop = '20px';
        letterBtn.addEventListener('click', showFinalLetter);
        thingsDisplay.appendChild(letterBtn);
    }
}

// ===================================
// SOUND EFFECTS (Optional)
// ===================================
function playSound(type) {
    // hook up sounds here if desired
}

// ===================================
// UTILITY FUNCTIONS
// ===================================
function createRipple(x, y, container) {
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(164, 180, 148, 0.5)';
    ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    ripple.style.animation = 'ripple 0.6s ease-out';
    container.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
        }
    }
    /* Optional nice fade when revealing the scratch canvas */
    .scratch-canvas { transition: opacity 0.25s ease; touch-action: none; }
`;
document.head.appendChild(style);

console.log('🎂 Birthday card initialized! Happy 20th Birthday! ✨');
