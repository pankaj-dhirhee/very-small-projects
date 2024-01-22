//this is button container or button
let btn = document.getElementById('btn-container');

//this is click sound
let click = new Audio('./assets/click2.wav')


//adding event listener on button
btn.addEventListener('click', (e)=>{
 e.preventDefault()
 click.play()
 setTimeout(()=>{
  location.replace('./html/quiz.html');
 }, 240)
});
