window.onload = function()
{
    let count = 0;
let score = 0;
let ques = document.getElementById("qtn");
let optn = document.getElementById("optns");
let res = document.getElementById("result");
let userAnswer = "";
let questions =
[
    {id:1,
    question:'what is your name?',
    answer:'Apple',
    options: ['Apple','banana','jackfruit','pineapple' ]
    },
    {id:2,
    question:'where do you live?',
    answer:'banana',
    options:['Apple','banana','jackfruit','pineapple' ]
    },  
    {id:3,
    question:'which pet do you have?',
    answer:'cat',
    options:['Apple','cat','jackfruit','pineapple' ]
    } 
];
printQuestion(count);
optn.addEventListener('click',function(event){
    
    let btn_id = event.target.id;
    //console.log(`${btn_id}`); 
    userAnswer = document.getElementById(`${btn_id}`).innerHTML;
    //console.log(`${userAnswer}`);
    if(count == questions.length - 1){
        console.log();
    }
    checkAnswer();
    endQuiz();
    printQuestion(count);
    
    
});
function printQuestion(count){
    
    ques.innerHTML =`<h2> Q:${count + 1}.${questions[count].question}<h2>`;
    optns.innerHTML =`<ul>
    <li id="1">${questions[count].options[0]}</li> 
    <li id="2">${questions[count].options[1]}</li> 
    <li id="3">${questions[count].options[2]}</li> 
    <li id="4">${questions[count].options[3]}</li> </ul>`;
    count++;
    
}
function checkAnswer(){
    
    console.log(`${userAnswer}`);
    var string1 = userAnswer;
    console.log(`object answer is ${questions[count].answer}`);
    var string2 = questions[count].answer;
    var result = string1.localeCompare(string2);
    console.log(`${result}`);
    if(result == 0)
    {
        score +=1;
        console.log(`you have the right`);
        //res.innerHTML = 'right answer';
        //setInterval(function(){
          //  res.innerHTML = '';
       // },1000)
    }
    else{
        console.log(`you have the wrong`);
        //res.innerHTML = 'wrong answer';
    }
}
function endQuiz(){
        
}
}