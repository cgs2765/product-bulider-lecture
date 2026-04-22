const generateBtn = document.getElementById('generate-btn');
const numberDisplay = document.getElementById('number-display');
const drum = document.getElementById('machine-drum');
const historyList = document.getElementById('history-list');
const drawCountSpan = document.getElementById('draw-count');
const luckyScoreSpan = document.getElementById('lucky-score');
const themeToggle = document.getElementById('theme-toggle');

let drawCount = 0;

// Soft Pastel Colors for balls
const COLORS = {
    yellow: '#fef08a',
    blue: '#bfdbfe',
    red: '#fecaca',
    grey: '#e5e7eb',
    green: '#bbf7d0'
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
    // Magic score between 80-100 for Shaolin
    const score = Math.floor(Math.random() * 21) + 80; 
    luckyScoreSpan.textContent = score;
};

const addToHistory = (numbers) => {
    const emptyMsg = historyList.querySelector('.empty-msg');
    if (emptyMsg) emptyMsg.remove();

    const li = document.createElement('li');
    li.classList.add('history-item');
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    let numbersHtml = '<div class="history-numbers" style="display: flex; gap: 4px;">';
    numbers.forEach(num => {
        numbersHtml += `<div class="hist-ball" style="background-color: ${getNumberColor(num)}; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; color: #881337; font-weight: 700;">${num}</div>`;
    });
    numbersHtml += '</div>';

    li.innerHTML = `
        <span style="color: #be123c;">${time}</span>
        ${numbersHtml}
    `;

    historyList.prepend(li);
    if (historyList.children.length > 5) historyList.lastElementChild.remove();
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
        }, (i + 1) * 700);
    });
};

// Theme Toggle
const updateThemeIcon = (theme) => {
    themeToggle.textContent = theme === 'dark' ? '✨' : '🌸';
};

const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

generateBtn.addEventListener('click', startDraw);
