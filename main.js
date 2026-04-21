const generateBtn = document.querySelector('.generate-btn');
const numberDisplay = document.querySelector('.number-display');
const themeToggle = document.getElementById('theme-toggle');

const getNumberColor = (number) => {
    if (number <= 10) return '#fbc400';
    if (number <= 20) return '#69c8f2';
    if (number <= 30) return '#ff7272';
    if (number <= 40) return '#aaa';
    return '#b0d840';
};

const generateLottoNumbers = () => {
    numberDisplay.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach((number, index) => {
        const ball = document.createElement('div');
        ball.classList.add('lotto-ball');
        ball.textContent = number;
        ball.style.backgroundColor = getNumberColor(number);
        ball.style.animationDelay = `${index * 0.1}s`;
        numberDisplay.appendChild(ball);
    });
};

// Theme Toggle Logic
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

generateBtn.addEventListener('click', generateLottoNumbers);
