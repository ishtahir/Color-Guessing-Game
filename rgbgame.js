const squares = document.querySelectorAll('.square');
const colorDisplay = document.querySelector('.color-display');
const playAgainBtn = document.querySelector('.play-again-btn');
const easyBtn = document.querySelector('.easy-btn');
const mediumBtn = document.querySelector('.medium-btn');
const h1 = document.querySelector('h1');
const messageStatus = document.querySelector('.message-status');
let randomIndex = Math.floor(Math.random() * 6);
let colors = randomColor(6);
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

colorDisplay.textContent = pickedColor;

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

playAgainBtn.addEventListener('click', function() {
    colors = randomColor(6);
    randomIndex = Math.floor(Math.random() * 6);
    pickedColor = colors[randomIndex];
    playAgainBtn.textContent = 'New Colors';
    h1.style.backgroundColor = '#232323';
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
});
