//Figure out way to pass the value of which button needs the animation
//Figure out how to pass number values form buttons to Answer_div
const Answer_div=document.getElementById('Answer');
const Equals_button=document.getElementById('equals');
const Clear_button=document.getElementById('AC');
const Divide_button=document.getElementById('divide');
const Multiply_button=document.getElementById('multiply');
const Plus_button=document.getElementById('plus');
const Minus_button=document.getElementById('minus');
const Sign_button=document.getElementById('sign');
const Numbers=document.querySelectorAll('[numbers]');
const pastAnswers=document.getElementById('pastAnswers');
const plus=document.getElementById('plus');

//Numbers.forEach((button) =>
//    button.addEventListener('click', () => console.log("meeeeep"))
//)
Equals_button.addEventListener('click',function(){
    pastAnswers.innerHTML="30300 + 30303";
    Answer_div.innerHTML="4000000004";
    Clear_button.innerHTML="AC";
});
Clear_button.addEventListener('click',function(){
    Answer_div.innerHTML="0";
    pastAnswers.innerHTML="";
    Clear_button.innerHTML="C";
});
Sign_button.addEventListener('click',function(){
    
});

plus.addEventListener('click',function(){
    
});
Numbers.forEach((button) => {
    button.addEventListener('click', () => {
      console.log("meeep");
    });
});
// function greyAnimate(){
//     setTimeout(() => {
//         Clear_button.style.backgroundColor="darkgrey";
//         Clear_button.style.transition="0.2s";
//     },200);
// }