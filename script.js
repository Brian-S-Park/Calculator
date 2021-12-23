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
let num=0;
//Numbers.forEach((button) =>
//    button.addEventListener('click', () => console.log("meeeeep"))
//)
Equals_button.addEventListener('click',function(){
    pastAnswers.innerHTML="30300 + 30303";
    num=9999999999;
    Clear_button.innerHTML="AC";
//9999999999
    printOutput(num);
});
Clear_button.addEventListener('click',function(){
    Answer_div.innerHTML="0";
    pastAnswers.innerHTML="";
    Clear_button.innerHTML="C";
});
Sign_button.addEventListener('click',function(){
    
});
function getHistory(){
    return pastAnswers.innerText;
}
function printHistory(){
    pastAnswers.innerText=num;
}
function getOutput(num){
    return Answer_div.innerText;
}
function printOutput(num){
    return Answer_div.innerText=formattedNum(num);
}
function formattedNum(num){
    let n = Number(num);
    if(n > 9999999999){
        alert("Overflow Error: The answer was too big!");
    }
    else{
        let value = n.toLocaleString('en');
        return value;
    }
}
for(let i=0;){

}
plus.addEventListener('click',function(){
    
});
Numbers.forEach((button) => {
    button.addEventListener('click', () => {
      console.log("meeep");
    });
});
