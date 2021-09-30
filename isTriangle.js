var angle = document.querySelector(".angle_input");
var is_triangle_btn = document.querySelector("#btn");
var output1 = document.querySelector("#output");

function sumOfAngles(angle1,angle2,angle3)
{
    const calculate = angle1 + angle2 + angle3 ;
    return calculate;
}


function isTriangle()
{
    
    const sum = sumOfAngles(Number(angle[0]),Number(angle[1]),Number(angle[2]));
    if(sum === 180)
    {
        output1.innerText="Yay the angles form triangle";
    }
    else
    {
        output1.innerText="oh! oh! the angles don't form triangle";
    }
}


is_triangle_btn.addEventListener("click",isTriangle);