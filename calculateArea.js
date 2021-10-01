const a1= document.querySelector("#a");
const b1= document.querySelector("#b");
const c1= document.querySelector("#c");
const button=document.querySelector("#btn");
const output1=document.querySelector("#output");

button.addEventListener("click",CalculateAreaOfTheTriangle);


function calculateSArea(a,b,c)
{
    const s = (a+b+c)/2
    const sArea= (s*((s-a)*(s-b)*(s-c)));
    return sArea;
    
    
}
function CalculateAreaOfTheTriangle()
{
   console.log(a1.value,b1.value,c1.value);
  
    const Area= Math.sqrt(calculateSArea(a1.value,b1.value,c1.value));
    output1.innerText = "Area of the triangle is " +Area; 
}

