
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber == 1){
        return "rock";
    }
    else if (randomNumber == 2){
        return "paper";
    }
    else if(randomNumber == 3){
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == "icon rock clicked" && computerSelection == "rock"){
        return "It's a draw!";
    }
    else if(playerSelection == "icon paper clicked" && computerSelection == "paper"){
        return "It's a draw!";
    }
    else if(playerSelection == "icon scissors clicked" && computerSelection == "scissors"){
        return "It's a draw";
    }
    else if(playerSelection == "icon paper clicked" && computerSelection == "rock"){
        return "You win!";
    }
    else if(playerSelection == "icon rock clicked" && computerSelection == "scissors"){
        return "You win!";
    }
    else if(playerSelection == "icon scissors clicked" && computerSelection == "paper"){
        return "You win!";
    }
    else if(playerSelection == "icon scissors clicked" && computerSelection == "rock"){
        return "You lose!";
    }
    else if(playerSelection == "icon rock clicked" && computerSelection == "paper"){
        return "You lose!";
    }
    else if(playerSelection == "icon paper clicked" && computerSelection == "scissors"){
        return "You lose!";
    }
}

function checkFinalScores(playerScore, computerScore){
    if(playerScore > computerScore){
        console.log("\nYou win the game!");
        console.log(" \n Your score: " + playerScore);
        console.log(" \n Computer Score: " + computerScore);
    }
    else if(playerScore < computerScore){
        console.log("\nYou lose the game!");
        console.log(" \n Your score: " + playerScore);
        console.log(" \n Computer Score: " + computerScore);
    }
    else{
        console.log("\nThe game ends in a draw!");
        console.log(" \n Your score: " + playerScore);
        console.log(" \n Computer Score: " + computerScore);
    }
}

const icons = Array.from(document.querySelectorAll(".icon"));
const playerScoreClass = document.querySelector(".player-score")
const computerScoreClass = document.querySelector('.computer-score')

icons.forEach(icon => icon.addEventListener('mousedown', iconClicked));
icons.forEach(icon => icon.addEventListener('mouseup', iconReleased));
icons.forEach(icon => icon.addEventListener('mouseleave', function(){
    this.classList.remove('clicked')
}))

const container = document.querySelector('.container')
const finalResults = document.querySelector('.results')

let playerScore = 0;
let computerScore = 0;

function iconClicked(){
    this.classList.toggle('clicked');

    let computerChoice = getComputerChoice();
    let result = playRound(this.className, computerChoice);

    if(result == "You win!"){
        if (playerScore == 4){
            playerScoreClass.textContent = `Your Score: ${playerScore + 1}`
            finalResults.textContent = "Congrats!, You've Won the game!"
            let iconsClass = document.querySelector('.icons')
            container.removeChild(iconsClass)
        }
        else{
            playerScore++ 
            playerScoreClass.textContent = `Your Score: ${playerScore}`
            finalResults.textContent = `You win the round!, Computer chose ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`
        }
    }
    else if(result == "You lose!"){
        if(computerScore == 4){
            computerScoreClass.textContent = `Computer Score: ${computerScore + 1}`
            finalResults.textContent = "You lost the game :( You'll get 'em next time!"
            let iconsClass = document.querySelector('.icons')
            container.removeChild(iconsClass)
            
        }
        else{
            computerScore++
            computerScoreClass.textContent = `Computer Score: ${computerScore}`
            finalResults.textContent = `You lost the round!, Computer chose ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`
        }
    }
    else if (computerScore !== 4 || playerScore !== 4){  
        finalResults.textContent = `It's a draw!`
    }
}
    
function iconReleased(){
    this.classList.toggle('clicked');
}




