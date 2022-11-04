// Variables globales //

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let elementSize;
let canvasSize;
const upButton = document.querySelector('#up');
const leftButton = document.querySelector('#left');
const rigthButton = document.querySelector('#rigth');
const downButton = document.querySelector('#down');
const playerPosition = {
  x : undefined,
  y : undefined,
};

// EventListeners //

upButton.addEventListener('click', movePlayerUp),
leftButton.addEventListener('click', movePlayerLeft),
rigthButton.addEventListener('click', movePlayerRight),
downButton.addEventListener('click', movePlayerDown),
window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);
window.addEventListener('keydown', moveByKeys);

// Funciones //

function setCanvasSize (){
    if (window.innerHeight > window.innerWidth) {
        canvasSize = innerWidth * 0.7;
    } else {
        canvasSize = innerHeight * 0.7;
    }
    
    canvas.setAttribute ('width', canvasSize);
    canvas.setAttribute ('height', canvasSize);
    elementSize = canvasSize/10;
    
    startGame();
}

function startGame () {

    game.font = elementSize + 'px Verdana';
    game.textAlign = 'end';

    let map = maps[0];
    const mapRows = map.trim().split('\n');
    const mapRowsCols = mapRows.map(row => row.trim().split(''));

    game.clearRect(0,0,canvasSize,canvasSize);
    mapRowsCols.forEach((row, rowI ) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            const posX = elementSize * (colI + 1);
            const posY = elementSize * (rowI + 1);

            if (col === 'O'){
              if (!playerPosition.x && !playerPosition.y){
                playerPosition.x = posX;
                playerPosition.y = posY;
              }
            } 

            game.fillText(emoji, posX, posY);
        });
    });

    movePlayer();
}

function movePlayer(){
  game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);
}

function movePlayerUp(){
    console.log('te fuiste parriba');
  if ((playerPosition.y - elementSize) < elementSize) {
    console.log('OUT');
  } else {
    playerPosition.y -= elementSize;
    startGame();
  }
};

function movePlayerLeft(){
    console.log('te fuiste palaizquierda');
    playerPosition.x -= elementSize;
    startGame();
};

function movePlayerRight(){
    console.log('te fuiste paladerecha');
    playerPosition.x += elementSize;
    startGame();
};

function movePlayerDown(){
    console.log('te fuiste pabajo');
    playerPosition.y += elementSize;
    startGame();
};

function moveByKeys(event){
  if (event.key == 'ArrowUp'){
    movePlayerUp();
  } else if (event.key == 'ArrowLeft'){
    movePlayerLeft();
  } else if (event.key == 'ArrowRight'){
    movePlayerRight();
  } else if (event.key == 'ArrowDown'){
    movePlayerDown();
  }
}