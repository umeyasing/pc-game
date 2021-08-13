let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertTwoWords(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return("scissors");

}

function win(userChoice,computerChoice){
    const smallUserWord = "(user)".fontsize(3).sub();
    const smallCompWord = "(comp)".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore ++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertTwoWords(userChoice)}${smallUserWord}  beats  ${convertTwoWords(computerChoice)}${smallCompWord} . You Win!🔥 `;
    userChoice_div.classList.add('green-glow')
    setTimeout(() => userChoice_div.classList.remove('green-glow'),300);
}


function lose(userChoice,computerChoice){
    const smallUserWord = "(user)".fontsize(3).sub();
    const smallCompWord = "(comp)".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    compScore ++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertTwoWords(userChoice)}${smallUserWord}  beats  ${convertTwoWords(computerChoice)}${smallCompWord} . You lose!👻 `;
    userChoice_div.classList.add('red-glow')
    setTimeout(() => userChoice_div.classList.remove('red-glow'),300);
}

function draw(userChoice,computerChoice){
    const smallUserWord = "(user)".fontsize(3).sub();
    const smallCompWord = "(comp)".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertTwoWords(userChoice)}${smallUserWord}  beats  ${convertTwoWords(computerChoice)}${smallCompWord} . It's a draw!🐵 `;
    userChoice_div.classList.add('grey-glow')
    setTimeout(() => userChoice_div.classList.remove('grey-glow'),300);
}

function Game(userChoice){
    const computerChoice = getCompChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
             break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;    
    }
    
}




function main(){
    rock_div.addEventListener('click', function(){
        Game("r");
    })
    paper_div.addEventListener('click', function(){
        Game("p");
    })
    scissors_div.addEventListener('click', function(){
        Game("s");
    })
}

main();