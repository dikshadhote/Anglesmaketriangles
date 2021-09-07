let height=document.getElementById('input-height');
let base=document.getElementById('input-base');
let areaButton=document.getElementById('area-button');
let output=document.getElementById('area-output');


areaButton.addEventListener("click",displayOutput)

function calculateArea(height,base)
{
    let area=(height*base)/2;

    return area;
}

function displayOutput()
{
    let heightOfTriangle=parseInt(height.value);
    let baseOfTriangle=parseInt(base.value);
    output.style.display="block";
    area=calculateArea(heightOfTriangle,baseOfTriangle);
    output.innerText="Area of triangle is "+area;
}