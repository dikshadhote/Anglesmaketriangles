QuestionDB=[
    {
        question:"What will be third angle of triangle if 30°,60° are other two angles?",
        answer:"90"
    },
    {
        question:"What will be third angle of triangle if 120°,40° are other two angles?",
        answer:"20"

    },
    {
        question:"What will be third angle of triangle if 60°,60° are other two angles?",
        answer:"60"
    }
]

let container=document.querySelector("#container");
let angleButton=document.querySelector("#thirdangle-button");
let angleOutput=document.querySelector("#thirdangle-output");

angleButton.addEventListener("click",displayOutput);

function displayQuestions()
{
    
   
for(let i=0;i<QuestionDB.length;i++)
{
    let questionContainer=document.createElement('div');
questionContainer.innerHTML=`
<p>${QuestionDB[i].question}</p>
<input class="angle-input"/>
`;
container.appendChild(questionContainer);
}
}

function displayOutput()
{
   
    let score=calculateScore();
    angleOutput.style.display="block";
    angleOutput.innerText="your score is "+score;
}

function calculateScore(){
    let score=0;
   
    let inputAngles=document.querySelectorAll('.angle-input')
    for(let i=0;i<inputAngles.length;i++)
    {
        console.log(inputAngles[i].value,QuestionDB[i].answer)
        if(inputAngles[i].value===QuestionDB[i].answer)
        {
            score++;
            
        }
    }
  return score;  
}

displayQuestions();