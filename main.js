const generateBtn = document.querySelector('.generate-btn');
const numberDisplay = document.querySelector('.number-display');

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

generateBtn.addEventListener('click', generateLottoNumbers);
