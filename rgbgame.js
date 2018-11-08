const colorDisplay = document.querySelector('.color-display');
const container = document.querySelector('.container');
const playAgainBtn = document.querySelector('.play-again-btn');
const easyBtn = document.querySelector('.easy-btn');
const mediumBtn = document.querySelector('.medium-btn');
const h1 = document.querySelector('h1');
const messageStatus = document.querySelector('.message-status');
let numSquares = 3;
let squares = createSquares(numSquares);
let randomIndex = Math.floor(Math.random() * numSquares);
let colors = randomColor(numSquares);
let pickedColor = colors[randomIndex];

function randomColor(num) {
    const colorsArr = [];
    for (let i = 0; i < num; i++) {
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const red = Math.floor(Math.random() * 256);

        colorsArr.push(`rgb(${red}, ${green}, ${blue})`);
    }
    return colorsArr;
}

function createSquares(num) {
    const squaresArr = [];
    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        squaresArr.push(div);
        container.appendChild(div);
    }
    return squaresArr;
}

function resetGame() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener('click', function() {
            if (this.style.backgroundColor !== pickedColor) {
                this.style.backgroundColor = '#232323';
                messageStatus.textContent = 'Try Again!';
            } else {
                messageStatus.textContent = 'Correct!';
                playAgainBtn.textContent = 'Play Again?';
                for (let i = 0; i < squares.length; i++) {
                    squares[i].style.backgroundColor = pickedColor;
                }
                h1.style.backgroundColor = pickedColor;
            }
        });
    }
}

colorDisplay.textContent = pickedColor;

resetGame();

playAgainBtn.addEventListener('click', function() {
    colors = randomColor(numSquares);
    randomIndex = Math.floor(Math.random() * numSquares);
    pickedColor = colors[randomIndex];
    colorDisplay.textContent = pickedColor;
    playAgainBtn.textContent = 'New Colors';
    h1.style.backgroundColor = 'steelblue';
    messageStatus.textContent = '';
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
});

easyBtn.addEventListener('click', function() {
    easyBtn.classList.add('selected');
    mediumBtn.classList.remove('selected');
    container.innerHTML = '';
    numSquares = 3;
    squares = createSquares(numSquares);
    randomIndex = Math.floor(Math.random() * numSquares);
    colors = randomColor(numSquares);
    pickedColor = colors[randomIndex];
    colorDisplay.textContent = pickedColor;
    messageStatus.textContent = '';
    resetGame();
});

mediumBtn.addEventListener('click', function() {
    easyBtn.classList.remove('selected');
    mediumBtn.classList.add('selected');
    container.innerHTML = '';
    numSquares = 6;
    squares = createSquares(numSquares);
    randomIndex = Math.floor(Math.random() * numSquares);
    colors = randomColor(numSquares);
    pickedColor = colors[randomIndex];
    colorDisplay.textContent = pickedColor;
    messageStatus.textContent = '';
    resetGame();
});
