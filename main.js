const generateBtn = document.getElementById('generate-btn');
const numberDisplay = document.getElementById('number-display');
const drum = document.getElementById('machine-drum');
const historyList = document.getElementById('history-list');
const drawCountSpan = document.getElementById('draw-count');
const luckyScoreSpan = document.getElementById('lucky-score');
const themeToggle = document.getElementById('theme-toggle');

let drawCount = 0;

const COLORS = {
    yellow: '#fbbf24',
    blue: '#38bdf8',
    red: '#f87171',
    grey: '#94a3b8',
    green: '#4ade80'
};

const getNumberColor = (number) => {
    if (number <= 10) return COLORS.yellow;
    if (number <= 20) return COLORS.blue;
    if (number <= 30) return COLORS.red;
    if (number <= 40) return COLORS.grey;
    return COLORS.green;
};

const updateStats = () => {
    drawCount++;
    drawCountSpan.textContent = drawCount;
    // Simulate a "Lucky Score" based on draw count and random factor
    const score = Math.floor(Math.random() * 30) + 70; 
    luckyScoreSpan.textContent = score;
};

const addToHistory = (numbers) => {
    const emptyMsg = historyList.querySelector('.empty-msg');
    if (emptyMsg) emptyMsg.remove();

    const li = document.createElement('li');
    li.classList.add('history-item');
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    let numbersHtml = '<div class="history-numbers">';
    numbers.forEach(num => {
        numbersHtml += `<div class="hist-ball" style="background-color: ${getNumberColor(num)}">${num}</div>`;
    });
    numbersHtml += '</div>';

    li.innerHTML = `
        <span>${time}</span>
        ${numbersHtml}
    `;

    historyList.prepend(li);
    
    // Keep only last 5
    if (historyList.children.length > 5) {
        historyList.lastElementChild.remove();
    }
};

const startDraw = () => {
    generateBtn.disabled = true;
    numberDisplay.innerHTML = '';
    drum.classList.add('spinning');
    
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    // Draw one by one with delay
    sortedNumbers.forEach((num, i) => {
        setTimeout(() => {
            const ball = document.createElement('div');
            ball.classList.add('lotto-ball');
            ball.style.backgroundColor = getNumberColor(num);
            ball.textContent = num;
            numberDisplay.appendChild(ball);

            if (i === 5) {
                drum.classList.remove('spinning');
                generateBtn.disabled = false;
                updateStats();
                addToHistory(sortedNumbers);
            }
        }, (i + 1) * 800); // 0.8s interval for tension
    });
};

// Theme Logic
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
themeToggle.textContent = currentTheme === 'dark' ? '🌙' : '🌞';

themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '🌙' : '🌞';
});

generateBtn.addEventListener('click', startDraw);
