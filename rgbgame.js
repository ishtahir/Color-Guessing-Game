const colorDisplay = document.querySelector('.color-display');
const container = document.querySelector('.container');
const playAgainBtn = document.querySelector('.play-again-btn');
const easyBtn = document.querySelector('.easy-btn');
const mediumBtn = document.querySelector('.medium-btn');
const h1 = document.querySelector('h1');
const messageStatus = document.querySelector('.message-status');
const modeBtns = document.querySelectorAll('.mode');
let numSquares = 3;
let squares = createSquares(numSquares);
let colors = randomColor(numSquares);
let randomIndex = Math.floor(Math.random() * numSquares);
let pickedColor = colors[randomIndex];

init();

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
    colors = randomColor(numSquares);
    randomIndex = Math.floor(Math.random() * numSquares);
    pickedColor = colors[randomIndex];
    colorDisplay.textContent = pickedColor;
    messageStatus.textContent = '';
    h1.style.backgroundColor = 'steelblue';
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

function init() {
    for (let i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener('click', function() {
            modeBtns[0].classList.remove('selected');
            modeBtns[1].classList.remove('selected');
            this.classList.add('selected');
            container.innerHTML = '';
            if (this.textContent === 'Easy') {
                numSquares = 3;
            } else if (this.textContent === 'Medium') {
                numSquares = 6;
            }
            squares = createSquares(numSquares);
            colors = randomColor(numSquares);
            randomIndex = Math.floor(Math.random() * numSquares);
            pickedColor = colors[randomIndex];
            colorDisplay.textContent = pickedColor;
            messageStatus.textContent = '';
            resetGame();
        });
    }
    colorDisplay.textContent = pickedColor;
    resetGame();
}

playAgainBtn.addEventListener('click', function() {
    playAgainBtn.textContent = 'New Colors';
    resetGame();
});
