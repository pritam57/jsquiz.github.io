const quiz=[
    {
        question:"Q1:full form of html?",
        a:"Hypertext Markup Language",
        b:"Happy Markup Language",
        c:"Hypertext Make Language",
        d:"Hypertext Markup Largeicon",
        ans:"a",
    },
    {  question:"Q1:full form of CSS?",
    a:"Cascading Style Sheets",
    b:"Cascading Sheet Sheets",
    c:"Cascading Strong style ",
    d:"Cover Style Sheets",
    ans:"a",

},
    {   
        question:"Q3:full form of JS?",
    a:"java so",
    b:"joke set",
    c:"java sheet",
    d:"java script",
    ans:"d",
    },
{
    question:"Q4:full form of wd?",
    a:"web develop",
    b:"wake day",
    c:"web developer",
    d:"wild div",
    ans:"c",

    }
];

const question=document.querySelector(".question");
const answers=document.querySelectorAll(".answer")
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const submitbtn =document.querySelector("#submit");
const result=document.querySelector(".scorearea")

let currentquiz=0;
let score =0;
let userans="p";

laodquiz();


function laodquiz(){
   
    const currentquizdata =quiz[currentquiz];
    question.textContent=currentquizdata.question
    option1.textContent = currentquizdata.a
    option2.textContent = currentquizdata.b
    option3.textContent = currentquizdata.c
    option4.textContent = currentquizdata.d
    option5.textContent =currentquizdata.ans
   
}
/*
function deselectans(){
  answers.forEach(answers => answers.checked=false)    
  }
  
  function getselected(){
      let answers
      answers.forEach(answe => {
          if(answer.checked){
          answer =answers.id
  }
})
return answe
}
*/
submitbtn.addEventListener("click",theselectedans);

function theselectedans(){
    answers.forEach(checked)
    function checked(item){
if(item.checked===true){
     userans=item.id
    // console.log(userans)
    if((quiz[currentquiz].ans)===userans){
        score++
       currentquiz++
       clearradio()
    nextfunco()
    
    }
    else{
currentquiz++
clearradio()
nextfunco()

    }
}
}
}

function clearradio(){
    
        var radio = document.querySelector('input[type=radio][name=answer]:checked');
        radio.checked = false;

}
  
function nextfunco(){
    if(currentquiz===4){
        document.querySelector(".scorearea").style.display = 'block'
       result.innerText = `your score is ${score}/4`
        }
    else{
    const nextquiz =quiz[currentquiz];
    question.textContent=nextquiz.question
    option1.textContent = nextquiz.a
    option2.textContent = nextquiz.b
    option3.textContent = nextquiz.c
    option4.textContent = nextquiz.d
    option5.textContent =nextquiz.ans
    }
}

/*
function checkanser(){
        if(userans===currentquizdata.ans){
            score++
            console.log(score)
        }
        else{
            score=score
            console.log(score)
        }
    }
submitbtn.addEventListener("click", ()=>{
    const answer =getselectradio()
    if (answer){
        if(answer === quiz[currentquiz].correct){
            score++
        }
        currentquiz++
        if (currentquiz < quiz.length){
            laodquiz()
        }
        else{
                quiz.textContent=
                <h2>${score}</h2>
        }
    }
})
*/