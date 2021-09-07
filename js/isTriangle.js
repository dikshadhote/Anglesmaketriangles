let angle=document.querySelectorAll(".angle");
let triangleButton=document.querySelector("#triangle-button");
let output=document.getElementById('triangle-output');


triangleButton.addEventListener("click",showOutput);

function checkSum(angle)
{
    let sum=0
    for(let i=0;i<angle.length;i++)
    {
        sum=sum+parseInt(angle[i].value);
        
    }

   
return sum;
}


function showOutput()
{
    let sum=checkSum(angle);
    if(sum===180)
    {
        output.innerText="It is a triangle!";
        output.style.display="block";
       
    }
    else{
        output.innerText="It is not a triangle";
        output.style.display="block";
        
    }

}