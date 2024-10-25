const gameArea = document.getElementById('game');
const scoreDisplay = document.getElementById('score');
let score = 0;

function createFallingObject() {
    const object = document.createElement('div');
    object.className = 'object';
    object.style.left = Math.random() * (gameArea.clientWidth - 30) + 'px';
    gameArea.appendChild(object);

    let fallSpeed = Math.random() * 3 + 2; // Speed between 2 and 5
    let fallInterval = setInterval(() => {
        object.style.top = (object.offsetTop + fallSpeed) + 'px';

        if (object.offsetTop > gameArea.clientHeight) {
            clearInterval(fallInterval);
            gameArea.removeChild(object);
            alert('Game Over! Your score was: ' + score);
            resetGame();
        }
    }, 100);

    object.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = 'Score: ' + score;
        clearInterval(fallInterval);
        gameArea.removeChild(object);
    });
}

function resetGame() {
    score = 0;
    scoreDisplay.textContent = 'Score: 0';
    gameArea.innerHTML = '';
}

setInterval(createFallingObject, 1000); // Create a new object every second
