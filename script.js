const array = [
    {
        question : " Q1: Which shortcut is use to save the file in vs code?",
        a : "Ctrl + V",
        b : "Ctrl + S",
        c : "Ctrl + A",
        d : "Ctrl + P",
        ans : "ans2"
    },

    {
        question : " Q2: Which shortcut is use to open console at browser? ",
        a : "Ctrl + Shift + V",
        b : "Ctrl + Shift + B",
        c : "Ctrl + Shift + J",
        d : "Ctrl + Shift + P",
        ans : "ans3"
    },

    {
        question : " Q3: What is the full form of SQL?",
        a : "Structured Query Language",
        b : "Structure Query Language",
        c : "Simple Query Language",
        d : "Standard Query Language",
        ans : "ans1"
    },

    {
        question : " Q4: What is Module?",
        a : "A Javascript File in which we write code...",
        b : "A Html File in which we write code...",
        c : "A Css File in which we write code...",
        d : "none",
        ans : "ans1"
    },

    {
        question : " Q5: Who is the father of Javascript?",
        a : "Charles Babbage",
        b : "Karl Marx",
        c : "James Gosling OC",
        d : "Brendan Eich",
        ans : "ans4"
    }

];

const que = document.querySelector(".basic");
const opt1 = document.querySelector("#option1");
const opt2 = document.querySelector("#option2");
const opt3 = document.querySelector("#option3");
const opt4= document.querySelector("#option4");
const submit = document.querySelector("#btn");
// console.log(submit)

const ans = document.querySelectorAll(".answer");

const showscore = document.querySelector("#showscore");

let quecount = 0;
let score = 0;

const nextque = ()=>{
    const quelist = array[quecount];
    // console.log(quelist);
    que.innerHTML = quelist.question;

    opt1.innerHTML = quelist.a;
    opt2.innerHTML = quelist.b;
    opt3.innerHTML = quelist.c;
    opt4.innerHTML = quelist.d;

}

nextque();



const checkans = ()=>{

    let answer;

    ans.forEach( (currentElement) =>{
        if(currentElement.checked){
            answer = currentElement.id;
            // console.log(answer);
        }

    });
    return answer;
 

};

const notselect = ()=>{
    ans.forEach( currentElement => currentElement.checked = false)
        
    
}

submit.addEventListener("click",()=>{

    // console.log("you clicked me");
    const getans = checkans();
    // console.log(getans);

    if(getans == array[quecount].ans){
        score++;
    }
    quecount++;

    notselect();

    if(quecount<array.length){
        nextque();
    }
    else{
        showscore.innerHTML = 
        `
        <h3> Your Score ${score}/${array.length}</h3>
        <button class = ".btn" onclick = "location.reload()"> Play Again </button>
        `;
        showscore.classList.remove("showarea");
    }

});


