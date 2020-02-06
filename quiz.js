
let questions =
[
    {id:1,
    question:'What does WWW stand for?',
    answer:'World Wide Web',
    options: ['World Worm Web','World Wide Web','World Word Web','None of the above']
    },
    {id:2,
    question:'Which of the following is used to save the frequently visited web sites?',
    answer:'Favorites List',
    options:['Frequent List','Favorites List','Explorer List','None of the above' ]
    },  
    {id:3,
    question:'Which of the following is a presentation program??',
    answer:'Ms-Power Point',
    options:[ 'MS-Word','Ms-Excel','Ms-Power Point','Ms- Access']
    },
    {id:4,
        question:'Which of the following is a storage device?',
        answer:'All of the above',
        options:['Hard Disk','USB Disk','Floppy Disk','All of the above']
    },
    {id:5,
        question:'Which of the following software is used to view web pages?',
        answer:'Web Browser',
        options:[ 'Web Browser','Internet Browser','Page Browser','All of the above']
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
    ques.innerHTML =`<h2 id='quesHead'> Q${count + 1}.${questions[count].question}<h2>`;
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
console.log(`${score}`);


