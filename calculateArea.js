const sideInput= document.querySelector(".side_Input");
const button=document.querySelector("#btn");
const output1=document.querySelector("#output");

button.addEventListener("click",CalculateAreaOfTheTriangle);


function calculateArea(a,b,c)
{
    const s = (a+b+c)/2
    const sArea= (s*((s-a)*(s-b)*(s-c)));
    return sArea;
    
    
}
function CalculateAreaOfTheTriangle()
{
   
  
    var Area=Math.sqrt(calculateArea(Number(sideInput[0],sideInput[1],sideInput[2])));
    output1.innerText = "Area of the triangle is "+Area;
}

