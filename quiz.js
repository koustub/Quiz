
let ques = document.getElementById("qtn");
let optns = document.getElementById("optns");
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
    answer:'Apple',
    options:['Apple','cat','jackfruit','pineapple' ]
    } 
];

pageLoad();

// console.log(`${ques.innerText}`);
// console.log(`${pqtn.innerHTML}`);

function pageLoad(){
    
    ques.innerHTML = `<h2> Q: ${1}.${questions[0].question}<h2>`;
    optns.innerHTML = `<ul>
    <li id="0",">${questions[0].options[0]}</li> 
    <li id="1">${questions[0].options[1]}</li> 
    <li id="2">${questions[0].options[2]}</li> 
    <li id="3">${questions[0].options[3]}</li> </ul>`;

}
let count = 1;
optns.addEventListener('click',function(event){
    
    console.log("button is pressed");
    var tid = document.getElementById('').innerHTML;
    console.log(`${tid}`);
    let optnsPrd = event.target.id;
    console.log(`${optns.prsd}`); 
    printQuestion(count);
    count++;

});
function printQuestion(count){

    ques.innerHTML = `<h2> Q:${count + 1}.${questions[count].question}<h2>`;
    optns.innerHTML = `<ul>
    <li>${questions[count].options[1]}</li> 
    <li>${questions[count].options[2]}</li> 
    <li>${questions[count].options[3]}</li> 
    <li>${questions[count].options[4]}</li> </ul>`;


}
