//get decimal function to work
const Answer_div=document.getElementById('Answer');
const Equals_button=document.getElementById('equals');
const allClear_button=document.getElementById('AC');
const Clear_button=document.getElementById('C');
const Divide_button=document.getElementById('divide');
const Multiply_button=document.getElementById('multiply');
//const Plus_button=document.getElementById('plus');
const Minus_button=document.getElementById('minus');
const Sign_button=document.getElementById('sign');
const Numbers=document.getElementsByClassName('numbers');
const zero=document.getElementsByClassName('longNumber');
const pastAnswers=document.getElementById('pastAnswers');
const plus=document.getElementById('+');
//const decimal=document.getElementsByClassName('bottomNumber');
let operator=document.getElementsByClassName('orangeNumbers');
let num=0;
let first=0;
let next=0;
let count=0;
let operate="";


Clear_button.addEventListener('click',function(){
    let output=reverseNumberFormat(getOutput());
    if(output!=0){
        Answer_div.innerHTML="";
    }
});
allClear_button.addEventListener('click',function(){
    for(let i=0;i<operator.length;i++){
        operator[i].style.backgroundColor = "orangered";
        operator[i].style.color = "white";
        count=0;
    }
    let output=reverseNumberFormat(getOutput());

    if(output!=NaN){
            printHistory("");
            printOutput("");
            num=0;
            first=0;
            next=0;   
    }

});

Sign_button.addEventListener('click',function(){
    
});
function getHistory(){
    return pastAnswers.innerText;
}
function printHistory(num){
    pastAnswers.innerText=num;
}
function getOutput(){
    return Answer_div.innerText;
}
function printOutput(num){
    Answer_div.innerText=formattedNum(num);
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
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}


for(let i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
           //alert("This operator is clicked "+this.id);
           let output=reverseNumberFormat(getOutput());
           if(output!=0 && count<1){
                count++;
                operator[i].style.backgroundColor = "white";
                operator[i].style.color = "orangered";
                first=reverseNumberFormat(getOutput());
                Answer_div.innerHTML="";
                operate=operator[i].id;
           }
           if(this.id==='='){
            for(let i=0;i<operator.length;i++){
                operator[i].style.backgroundColor="orangered";
                operator[i].style.color="white";                  
            }

                next=reverseNumberFormat(getOutput());
                //printOutput(output);
                //pastAnswers.innerHTML=output;
                if(operate==='+'){num=first+next;printOutput(num);}
                if(operate==='-'){num=first-next;printOutput(num);}
                if(operate==='*'){num=first*next;printOutput(num);}
                if(operate==='/'){num=first/next;printOutput(num);}
                count=0;
           }

    });
}

for(let i=0;i<Numbers.length;i++){
    Numbers[i].addEventListener('click',function(){
            let output=reverseNumberFormat(getOutput());
            if(output!=NaN){
                //alert(output);
                output=output+this.id;
                printOutput(output);
            }
    });
}
zero[0].addEventListener('click',function(){
        let output=reverseNumberFormat(getOutput());
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
});
// decimal[0].addEventListener('click',function(){
//     let output=reverseNumberFormat(getOutput());
//         output=output+this.id;
//        // alert(output);

//         printOutput(output);
// });

