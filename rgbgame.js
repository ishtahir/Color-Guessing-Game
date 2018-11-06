const squares = document.querySelectorAll('.square');
let colors = [randomColor(), randomColor(), randomColor(), randomColor(), randomColor(), randomColor()];
const randomIndex = Math.floor(Math.random() * 6);
let pickedColor = colors[randomIndex];

function randomColor() {
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const red = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
}
