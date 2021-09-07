let quizDB=[
    {
        question:"Which is the obstuse angle triangle from following?",
        Option1:"Triangle having one angle of 20° ",
        Option2:"Triangle having one angle of 120° ",
        Option3:"Triangle having one angle of 90° ",
        answer:"Triangle having one angle of 120° "
    },
    {
        question:"Which is the right angle triangle from following?",
        Option1:"Triangle having one angle of 20° ",
        Option2:"Triangle having one angle of 120° ",
        Option3:"Triangle having one angle of 90° ",
        answer:"Triangle having one angle of 90° "
    }
    ,
    {
        question:"Which of the following will form a triangle?",
        Option1:"120°,50°,10° ",
        Option2:"100°,30°,40° ",
        Option3:"40°,60°,90° ",
        answer:"120°,50°,10° "
    }
]

let quizForm=document.querySelector('#quiz-form');
let quizButton=document.querySelector('#quiz-button');
let quizOutput=document.querySelector('#quiz-output');

quizButton.addEventListener("click",showOutputOfQuiz)


function innerForm()
{
   // let container=document.createElement('div');
    
    for(let i=0;i<quizDB.length;i++)
    {
        let container=document.createElement('div');
        container.innerHTML=`<p>${(i+1)+" "+quizDB[i].question
        }</p>
        <label>A </label>
        <input type="radio" name="${i}" value="${quizDB[i].Option1}"/>${quizDB[i].Option1}
        <label>B </label>
        <input type="radio" name="${i}" value="${quizDB[i].Option2}"/>${quizDB[i].Option2}
        <label>C </label>
        <input type="radio" name="${i}" value="${quizDB[i].Option3}"/>${quizDB[i].Option3}`;
        
        quizForm.appendChild(container);
    }

 }



function showOutputOfQuiz()
{
    let score=calculateScore(quizDB);
   quizOutput.getElementsByClassName.display="block"
    quizOutput.innerText="Your Score is : "+score;

}

function calculateScore(quizDB)
{
    let score=0;
    let index=0;
    const formResult=new FormData(quizForm);
    for(let value of formResult.values())
    {
       if(quizDB[index].answer===value){
        score++;
       }
        index++;
    }
   
    return score;
    

}
    

innerForm();

