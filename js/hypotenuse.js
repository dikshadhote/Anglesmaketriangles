let sides=document.querySelectorAll(".side-triangle");
console.log(sides)
let buttonHypotenuse = document.getElementById('hypotenuse-button');
let outputHypotenuse = document.getElementById('hypotenuse-output');

buttonHypotenuse.addEventListener("click",displayOutput);

function displayOutput()
{
    let side1=sides[0].value;
    let side2=sides[1].value;
   let hypotenuse=calculateHypotenuse(side1,side2);
   outputHypotenuse.style.display="block";
   outputHypotenuse.innerText="Hypotensuse is "+hypotenuse;

   
}

function calculateHypotenuse(side1,side2)
{
let hypotenuse=Math.sqrt((side1 * side1) + (side2 * side2));
return hypotenuse;
}