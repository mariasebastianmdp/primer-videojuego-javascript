const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let elementSize;
let canvasSize;
const upButton = document.querySelector('#up');
const leftButton = document.querySelector('#left');
const rigthButton = document.querySelector('#rigth');
const downButton = document.querySelector('#down');


upButton.addEventListener('click', movePlayerUp),
leftButton.addEventListener('click', movePlayerLeft),
rigthButton.addEventListener('click', movePlayerRight),
downButton.addEventListener('click', movePlayerDown),
window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);
window.addEventListener('keydown', moveByKeys);

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

    let map = maps[1];
    const mapRows = map.trim().split('\n');
    const mapRowsCols = mapRows.map(row => row.trim().split(''));

    mapRowsCols.forEach((row, rowI ) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            const posX = elementSize * (colI + 1) + 5;
            const posY = elementSize * (rowI + 1) - 8;
            game.fillText(emoji, posX, posY);
        });
    });
}

function movePlayerUp(){
    console.log('te fuiste parriba')
};
function movePlayerLeft(){
    console.log('te fuiste palaizquierda')
};
function movePlayerRight(){
    console.log('te fuiste paladerecha')
};
function movePlayerDown(){
    console.log('te fuiste pabajo')
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