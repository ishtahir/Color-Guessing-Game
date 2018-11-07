const squares = document.querySelectorAll('.square');
const colorDisplay = document.querySelector('.color-display');
const randomIndex = Math.floor(Math.random() * 6);
let colors = [randomColor(), randomColor(), randomColor(), randomColor(), randomColor(), randomColor()];
let pickedColor = colors[randomIndex];
let messageStatus = document.querySelector('.message-status');

colorDisplay.textContent = pickedColor;

function randomColor() {
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const red = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener('click', function() {
        if (this.style.backgroundColor !== pickedColor) {
            this.style.backgroundColor = '#232323';
            messageStatus.textContent = 'Try Again!';
        } else {
            messageStatus.textContent = 'Correct!';
            for (let i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = pickedColor;
            }
        }
    });
}
