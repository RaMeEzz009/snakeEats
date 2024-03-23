// variables
let inputDir = { x: 0, y: 0 };
let lctime = 0;
let speed = 7;
let snakeArr = [
    { x: 13, y: 15 }
];
let food = { x: 15, y: 15 };




// functions
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lctime) / 1000 < 1 / speed) {
        console.log(ctime);
        return;
    }

    lctime = ctime;
    gameEngine();
}


function Collide(sArr) {
    for (let i = 1; i < snakeArr.length; i++) {
        if (snakeArr[0].x === snakeArr[i].x && snakeArr[0].y === snakeArr[i].y) {
            return true;
        }

    }

    if (snakeArr[0].x <= 0 || snakeArr[0].x >= 18 || snakeArr[0].y <= 0 || snakeArr[0].y >= 18) {
        return true;
    }
}



function gameEngine() {

    board.innerHTML = "";
    if (Collide(snakeArr)) {
        inputDir = { x: 0, y: 0 };
        alert("Game Over.Press Enter to continue");
        snakeArr = [
            { x: 13, y: 15 }];
    };
    if (snakeArr[0].x === food.x && snakeArr[0].y === food.y) {
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        food = { x: Math.round(2 + 14 * Math.random()), y: Math.round(2 + 14 * Math.random()) };

    }
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    };
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;






    snakeArr.forEach((e, index) => {
        let snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        snakeElement.classList.add('head');
        board.appendChild(snakeElement);
    });
    // Display the food
    let foodElement = document.createElement('div');

    foodElement.style.gridRowStart = food.y;

    foodElement.style.gridColumnStart = food.x;

    foodElement.classList.add('food')

    board.appendChild(foodElement);

}









// logic
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = { x: 0, y: 1 } // Start the game
    switch (e.key) {
        case "ArrowUp":
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":

            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowLeft":

            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":

            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
});
