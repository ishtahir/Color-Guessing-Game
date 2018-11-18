// declaring and defining all variables
const colorDisplay = document.querySelector('.color-display');
const container = document.querySelector('.container');
const playAgainBtn = document.querySelector('.play-again-btn');
const h1 = document.querySelector('h1');
const messageStatus = document.querySelector('.message-status');
const diffBtns = document.querySelectorAll('.diff');
let numSquares = 3;
let squares = createSquares(numSquares);
let colors = randomRgbColor(numSquares);
let randomIndex = Math.floor(Math.random() * numSquares);
let pickedColor = colors[randomIndex];

// function to create an array of num amount of rgb colors
function randomRgbColor(num) {
    const colorsArr = [];
    for (let i = 0; i < num; i++) {
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const red = Math.floor(Math.random() * 256);

        colorsArr.push(`rgb(${red}, ${green}, ${blue})`);
    }
    return colorsArr;
}

// function to create an array of num amount of hex colors
// function randomHexColor(num) {
//     const colorsArr = [];
//     const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
//     for (let i = 0; i < num; i++) {
//         let color = '#';
//         for (let i = 0; i < 6; i++) {
//             const index = Math.floor(Math.random() * 16);
//             color += hexArr[index];
//         }
//         colorsArr.push(color);
//     }
//     return colorsArr;
// }

// function to style the picked color for the header
function beautify(str) {
    str = str.slice(4, str.length - 1);
    str = str.split(',');
    str = `rgb(<span id="red">${str[0]}</span>, <span id="green">${str[1]}</span>, <span id="blue">${str[2]}</span>)`;
    return str;
}

// function to create num number of squares based on the game difficulty
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

// function to restart the game
function resetGame() {
    colors = randomRgbColor(numSquares);
    randomIndex = Math.floor(Math.random() * numSquares);
    pickedColor = colors[randomIndex];
    colorDisplay.innerHTML = beautify(pickedColor);
    messageStatus.textContent = '';
    h1.style.backgroundColor = '#777';
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

// function to run on game load
function init() {
    for (let i = 0; i < diffBtns.length; i++) {
        diffBtns[i].addEventListener('click', function() {
            diffBtns[0].classList.remove('selected');
            diffBtns[1].classList.remove('selected');
            diffBtns[2].classList.remove('selected');
            this.classList.add('selected');
            container.innerHTML = '';
            if (this.textContent === 'Easy') {
                numSquares = 3;
            } else if (this.textContent === 'Medium') {
                numSquares = 6;
            } else if (this.textContent === 'Hard') {
                numSquares = 9;
            }
            squares = createSquares(numSquares);
            resetGame();
        });
    }
    colorDisplay.innerHTML = beautify(pickedColor);
    resetGame();
}

init();

playAgainBtn.addEventListener('click', function() {
    playAgainBtn.textContent = 'New Colors';
    resetGame();
});

// ideas for Game
// - add score
// - add time
// - add hex mode
// - add elimination mode
// - add timed mode
// - add in a row mode
