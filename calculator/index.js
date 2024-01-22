let btn = document.querySelectorAll('.button');
let screen = document.getElementById('screen');



//forEach loop for all btn or button
Array.from(btn).forEach((item) =>{

 //adding eventlisteners to all buttons
 item.addEventListener('click', (e)=>{
 
 
 //if user clicks on multiply button then innerHTML of screen = '*'
 if(e.target.innerText == "x"){
   screen.innerHTML += '*';   
 }//if condition


 //if user click on 'C' btn then clear the screen
 else if(e.target.innerText == "C"){
   screen.innerHTML = "";
 }//else if

 
 //if user clicks on equals to button then display the answer
 else if(e.target.innerText == "="){
  try{
   screen.innerHTML = eval(screen.innerHTML); 
   screen.innerHTML = screen.innerHTML; 
  }//try
  
  catch(error){
    screen.style.fontSize = '2.6rem';
    screen.innerHTML = "";
    message = 'wrong expression';
    screen.innerHTML = message;
 }//catch
 }//else if
 
 
 //else, means is innerText of clicked button is not = "=" then..
 else{
   //displaying string's value on screen
   screen.innerHTML += e.target.innerText; 
 }//else

 
 
 });//eventListener
});//forEach
