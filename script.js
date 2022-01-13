
const Answer_div=document.getElementById('Answer');
const Equals_button=document.getElementById('equals');
const allClear_button=document.getElementById('AC');
const Clear_button=document.getElementById('C');
const Sign_button=document.getElementById('sign');
const Numbers=document.getElementsByClassName('numbers');
const zero=document.getElementsByClassName('longNumber');
const pastAnswers=document.getElementById('pastAnswers');
const plus=document.getElementById('+');
const dot=document.getElementsByClassName('bottomNumber');
let operator=document.getElementsByClassName('orangeNumbers');
let num=0;
let first=0;
let next=0;
let count=0;
let operate="";
let x=0;


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
        let output=getOutput();
        if(output!=0){
        output='-'+output
        printOutput(output);
    }
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
    console.log(n);
    if(n > 9999999999){
        alert("Error!");
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
           console.log(count);
           if(output!=0 && count<1){
                count++;
                operator[i].style.backgroundColor = "#FF925C";
                operator[i].style.color = "white";
                first=reverseNumberFormat(getOutput());
                if(this.id!='='){Answer_div.innerHTML="";}  
                operate=operator[i].id;
           }
           if(this.id==='='){
            for(let i=0;i<operator.length;i++){
                operator[i].style.backgroundColor="orangered";
                operator[i].style.color="white";                  
            }
                next=reverseNumberFormat(getOutput());
                if(operate==='+'){num=first+next;printOutput(num);pastAnswers.innerHTML=first+'+'+next;}
                if(operate==='-'){num=first-next;printOutput(num);pastAnswers.innerHTML=first+'-'+next;}
                if(operate==='*'){num=first*next;printOutput(num);pastAnswers.innerHTML=first+'*'+next;}
                if(operate==='/'){num=first/next;printOutput(num);pastAnswers.innerHTML=first+'/'+next;}
                count=0;
            }            
    });
}

for(let i=0;i<Numbers.length;i++){
    Numbers[i].addEventListener('click',function(){
            let output=reverseNumberFormat(getOutput());
            if(operate==='='){
            }
            if(output!=NaN){
                output=getOutput();
                output=output+this.id;
                output=reverseNumberFormat(output);
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
    dot[0].addEventListener('click',function(){
        let output=reverseNumberFormat(getOutput());
        output=output+this.id;
        Answer_div.innerHTML=output;
    });

