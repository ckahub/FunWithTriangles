const sideInput= document.querySelector(".side_Input");
const button=document.querySelector("#btn");
const output1=document.querySelector("#output");

button.addEventListener("click",calculateHypotenuse);

function calculateSumOfSquare(a,b)
{
    const sumOfSquare=a**2+b**2;
    return sumOfSquare;
}

function calculateHypotenuse()
{
    const sumOfSquareOfSide=calculateSumOfSquare(Number(sideInput[0],sideInput[1]));
    const lengthHypotenuse=Math.sqrt(sumOfSquareOfSide);
    output1.innerText= "The length of hypotenuse is " +lengthHypotenuse;

}