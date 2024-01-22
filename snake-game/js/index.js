//defining some variables
let inputDir = {x:0, y:0};
let speed = 11;
let lastPaintTime = 0;
let screen = document.querySelector('.game-container');
let snakeArr = [
 {x: 4, y: 12},
]
let food = {x:10, y: 8};
let score = 0;

//defining some constants
const foodSound = new Audio('./assets/music/food.mp3');
const gameOverSound = new Audio('./assets/music/gameover.mp3');
const moveSound = new Audio('./assets/music/move.mp3');
const musicSound = new Audio('./assets/music/music.mp3');
const arrowLeft = document.querySelector('#arrowLeft');
const arrowRight = document.querySelector('#arrowRight');
const arrowUp = document.querySelector('#arrowUp');
const arrowDown = document.querySelector('#arrowDown');
const scoreContainer = document.querySelector('.score-container');
const scoreBox = document.getElementById('score-box')



//----------------------------------
  //game functions
//----------------------------------
function main(ctime){
 window.requestAnimationFrame(main);
 
 //condition for fps control
  if((ctime - lastPaintTime)/1000 < 1/speed){
    return;
  }//if else condition
  
  lastPaintTime = ctime;
  gameEngine();
}//function main
//==========================================

//snake collide function
function isCollide(sarr){
 //if you bumped into yourself
 for(let i = 1; i < snakeArr.length; i++){
  if(snakeArr[i].x === snakeArr[0].x && snakeArr[i].y === snakeArr[0].y){
   return true;
  }
 }
 
 //if you bumped into the wall
 if(snakeArr[0].x > 30 || snakeArr[0].y < 0 || snakeArr[0].x < 0 || snakeArr[0].y > 30){
  return true;
 }
}
//==========================================

function gameEngine(){
 //updating the snake array & food
 
 if(isCollide(snakeArr)){
   gameOverSound.play();
   musicSound.pause();
   inputDir = {x:0, y:0};
   alert('Game over');
   snakeArr = [{x: 4, y: 12}];
   //musicSound.play();
   score = 0;
 }

//if you have eaten the food then
//increment the score 
//regenerate the food
if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
 foodSound.play()

 snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
 
 let a = 2;
 let b = 15;
 food = {x: Math.round(a + (b - a)* Math.random()), y: Math.round(a + (b - a)* Math.random())}
 
 //increment the score
 score += 1;
 scoreBox.innerHTML = "score" + " " + "-" + " " + score;
}


//moving the snake
for(let i = snakeArr.length - 2; i >= 0; i--){
 snakeArr[i + 1] = {...snakeArr[i]};
}
snakeArr[0].x += inputDir.x;
snakeArr[0].y += inputDir.y;


//displaying the snake
screen.innerHTML= "";
snakeArr.forEach((e, index) =>{
   let snakeElement = document.createElement('div');
   snakeElement.style.gridColumnStart = e.x;
   snakeElement.style.gridRowStart = e.y;
   
   if (index === 0) {
    snakeElement.classList.add('head')
   }
   else{
    snakeElement.classList.add('snake');
   }
   screen.appendChild(snakeElement);
 });
 
 //displaying the snake
 let foodElement = document.createElement('div');
 foodElement.style.gridColumnStart = food.x;
 foodElement.style.gridRowStart = food.y;
 foodElement.classList.add('food');
 screen.appendChild(foodElement);
}




//----------------------------------
  //main logic starts from here
//----------------------------------
window.requestAnimationFrame(main);
scoreContainer.addEventListener('click', e =>{
 inputDir = {x:0, y:-1};
 //musicSound.play();

 
 //adding events listeners for buttons
 arrowLeft.addEventListener('click', () =>{
  if (inputDir.x !== 1){
    moveSound.play();
    inputDir.x = -1;
    inputDir.y = 0;
  }
 });
 arrowRight.addEventListener('click', ()=>{
 if (inputDir.x !== -1){
    moveSound.play();
    inputDir.x = 1;
    inputDir.y = 0;
 }
 });
 arrowUp.addEventListener('click', ()=>{
  if (inputDir.y !== 1){
    moveSound.play();
    inputDir.x = 0;
    inputDir.y = -1;
  }
 });
 arrowDown.addEventListener('click', ()=>{
 if (inputDir.y !== -1){
   moveSound.play();
   inputDir.x = 0;
   inputDir.y = 1;
 }
});
});

