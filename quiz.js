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
let count = 0;
let score = 0;
let ques = document.getElementById("qtn");
let optn = document.getElementById("optns");
let interval;
let countTimer = 30;
let userAnswer = "";

printQuestion(count);
startTimer();
function printQuestion(count){
    ques.innerHTML =`<h2> Q:${count + 1}.${questions[count].question}<h2>`;
    optns.innerHTML =`<ul>
    <li id="1">${questions[count].options[0]}</li> 
    <li id="2">${questions[count].options[1]}</li> 
    <li id="3">${questions[count].options[2]}</li> 
    <li id="4">${questions[count].options[3]}</li> </ul>`;
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
        var res = document.getElementById('result');
        res.innerHTML = "<h2>Right Answer</h2>";
        setTimeout(function(){
            res.innerHTML = "<h2></h2>";
        }, 200);
        
    }
    else
    {
        console.log(`you have the wrong`);
        countTimer -= 5;
        var res = document.getElementById('result');
        res.innerHTML = "<h2>wrong Answer  </h2>";
        setTimeout(function(){
            res.innerHTML = "";
        }, 2000); 
    }
    console.log(`your score ${score}`);
}

function startTimer() {
    qt = document.getElementById('quizTime');
    interval = setInterval(function () {
        qt.innerHTML = countTimer;
        countTimer--;
        if (countTimer <= 0) {
            clearInterval(interval);
        }
    }, 1000);
}
function checkRun(){
    count++;
    if (count == questions.length) 
    {
        console.log('end of your quiz');
        // console.log('you have entered another room');
        // let fRes = document.getElementById("userResult");
        // fRes.innerHTML = `<h2> your Score is ${score}`;
        location.href = "end.html";
        return;
    }
    printQuestion(count);
}
optn.addEventListener('click',function(event)
{
    let btn_id = event.target.id;
    userAnswer = document.getElementById(`${btn_id}`).innerHTML;
    checkAnswer();
    checkRun();
    
});

