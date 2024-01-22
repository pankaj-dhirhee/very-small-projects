//initialising sone variables

//this is index of question Array
let index = 0;

//this is initial score
let score = 0;

//this is clicked status
let clicked = false;

//this is boxes of answer
let ansBox = document.querySelectorAll('.ans-box');

//this is paragraph or ans box
let ansP = document.querySelectorAll('.ans-para');

//this is span of score box
scoreSpan = document.getElementById('score-span');

//this is paragraph of question container
let QPara = document.getElementById('que-para');

//this is span of coin box
coinSpan = document.getElementById('coin-span');

// this is para1 of ans box;
let ansP1 = document.getElementById('ans-para1');

// this is para1 of ans box;
let ansP2 = document.getElementById('ans-para2');

// this is para1 of ans box;
let ansP3 = document.getElementById('ans-para3');

// this is para1 of ans box;
let ansP4 = document.getElementById('ans-para4');

//this is answer container
let ansContainer = document.getElementById('ans-container');

// this is ans box1;
let ansB1 = document.getElementById('ans-box1');

// this is ans box1;
let ansB2 = document.getElementById('ans-box2');

// this is ans box1;
let ansB3 = document.getElementById('ans-box3');

// this is ans box1;
let ansB4 = document.getElementById('ans-box4');

//this will play when right answer accur
let rightSong = new Audio('../assets/right.wav');

//this will play when wrong answer accur
let wrongSong = new Audio('../assets/wrong.mp3');

//thisbis click sound
let click = new Audio('../assets/click4.mp3');

//this is quiz container
let quizContainer = document.getElementById('quiz-container');

//this is next button
let next = document.getElementById("next-btn");

//this is class quiz of quiz container
let quiz = document.querySelector('.quiz');

//button sound effect
let btn = new Audio('../assets/click2.wav');

//this is apper sound
let appear = new Audio('../assets/appear.3gpp');

//tjis is ready containee
let ready = document.querySelector('.ready');



//==========================================
//Array of questions
//==========================================
let question =[
{
 que: "what is the answer of 4 × 2",
 text1: "TWO",  
 text2: "EIGHT",
 text3: "NINETEEN",
 text4: "SIXTY", 
 rightIndex: "1",
 rightText: "EIGHT",
},
{
 que: "what is the answer of 4 + 2",
 text1: "54 (fifty-four)",  
 text2: "8 (eight)",
 text3: "6 (six)",
 text4: "60 (sixty)", 
 rightIndex: "2",
 rightText: "6 (six)",
},
{
 que: "what is the answer of 4 × 2 + 5",
 text1: "13 (thirteen)",  
 text2: "81 (eighty-one)",
 text3: "19 (nineteen)",
 text4: "60 (sixty)", 
 rightIndex: "0",
 rightText: "13 (thirteen)",
},
{
 que: "what is the answer of 40 ÷  2",
 text1: "4 (four)",  
 text2: "8 (eight)",
 text3: "19 (nineteen)",
 text4: "20 (twenty)", 
 rightIndex: "3",
 rightText: "20 (twenty)",
},
];


//if you clicked on ready then questions will ne displayed
ready.addEventListener('click', ()=>{

 btn.play();
 setTimeout(()=>{
  btn.pause();
 }, 100)
 
 //this will hide the ready container
 ready.classList.add('reduce-height');
 
 //after 1 second ans-box start appering
 setTimeout(()=>{
  
  //=======================================
  //displaying the first question
  //=======================================
  QPara.innerText = question[`${index}`].que;

  appear.play();
  //displaying answer text in all ans box
  //displaying in animated way
  setTimeout(()=>{
    ansB1.style.visibility = 'visible';
    ansB1.innerText = question[`${index}`].text1;
    //click.play();
  }, 1600);

  setTimeout(()=>{
   ansB2.style.visibility = 'visible';
   ansB2.innerText = question[`${index}`].text2;
   //click.play();
 }, 1950);

  setTimeout(()=>{
   ansB3.style.visibility = 'visible';
   ansB3.innerText = question[`${index}`].text3;
   //click.play();
  }, 2250);

  setTimeout(()=>{
   ansB4.style.visibility = 'visible';
   ansB4.innerText = question[`${index}`].text4;
   //click.play();
  }, 2550);
  
 }, 1000);//setTimeout
})//ready.addEventListener




//==========================================
//adding forEach on para of ans box
//==========================================
Array.from(ansBox).forEach((item) =>{
 item.addEventListener('click', (e)=>{
 
 if(clicked != true){
  //this will dicide that which text will be correct
  let match = question[`${index}`].rightText;
  
  //this will give right Index to answer box
  let b = question[`${index}`].rightIndex;
  
  //giving background to all wrong ans boxes
  ansB1.style.background = "red";
  ansB2.style.background = "red";
  ansB3.style.background = "red";
  ansB4.style.background = "red";
  
  //giving background to wright answer box
  document.getElementsByClassName('ans-box')[b].style.background = "green";
  
  //if you clicked on right answer para...
  if(e.target.innerHTML == match){     
   score += 1;
   rightSong.play()
   scoreSpan.innerText = `${score}/5`
  }//if condition
  
  //else, means if you clicked on wrong answer para then...
  else{
   wrongSong.play();
  };//else condition
  
  //increment the Index
  index += 1;
  
  //true the variable clicked
  clicked = true;
 };//if condition
 });//event listener      
});//for each loop



//==========================================
//displaying next button
//==========================================
Array.from(ansBox).forEach((item) =>{
 item.addEventListener('click', (e)=>{
 
 
 setTimeout(()=>{
  quiz.classList.add("reduce-the-height");     
 }, 1100);//setTimeout
 
 //this will hide the quiz after 1.5 second
 setTimeout(()=>{
    quizContainer.style.display = 'none';
 }, 2000);//setTimeout
 
   quizContainer.style.display = 'none;'
 });//event listener      
});//for each loop





//==========================================
//handling next button
//==========================================
next.addEventListener('click', ()=>{
 
 click.play();
 
 //giving default background to all ans boxes
  ansB1.style.background = "#994bb4";
  ansB2.style.background = "#994bb4";
  ansB3.style.background = "#994bb4";
  ansB4.style.background = "#994bb4";
  
  //visibility hidden or all ans box
  ansB1.style.visibility = 'hidden';
  ansB2.style.visibility = 'hidden';
  ansB3.style.visibility = 'hidden';
  ansB4.style.visibility = 'hidden';
  
  quiz.classList.remove("reduce-the-height");
  quiz.classList.add("increase");
 
 setTimeout(()=>{
    quiz.classList.remove("increase");
 }, 1000);
 
 //hiding next button and showing quiz con..
 quizContainer.style.display = "flex";
 
 //load the new question
 QPara.innerText = question[`${index}`].que;
 
 
  appear.play();
 //load the new ansbox
//displaying in animated way
setTimeout(()=>{
 ansB1.style.visibility = 'visible';
 ansB1.innerText = question[`${index}`].text1;
}, 1500);

setTimeout(()=>{
 ansB2.style.visibility = 'visible';
 ansB2.innerText = question[`${index}`].text2;
}, 1850);

setTimeout(()=>{
 ansB3.style.visibility = 'visible';
 ansB3.innerText = question[`${index}`].text3;
}, 2150);

setTimeout(()=>{
 ansB4.style.visibility = 'visible';
 ansB4.innerText = question[`${index}`].text4;
}, 2450);
 
 //faose the variable clicked
  clicked = false;
});//event listener




