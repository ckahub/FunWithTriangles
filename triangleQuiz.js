const quizForm= document.querySelector(".quiz_form");
const answerBtn= document.querySelector("#submit_answer_btn");
const output1= document.querySelector("#output");

const correctAnswers = ["90","Right Angled Triangle"];

answerBtn.addEventListener("click",calculateScore);

function calculateScore()
{
    let score=0;
    let index=0;
    const formResult= new FormData(quizForm);
    
    
    for(let value of formResult.values())
    {
       
        if(value === correctAnswers[index])
        {
            score=score+1;
        }
        index=index+1;
    } 

   
    output1.innerText="your score is "+score;


}