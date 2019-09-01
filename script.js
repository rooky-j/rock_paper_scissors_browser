//Function to randomly decide Computer's Move
let playerScore = 0;
let computerScore = 0; 
const playerDiv = document.getElementById('playerBox');
const computerDiv = document.getElementById('computerBox');
const winnerDiv = document.getElementById('winner');
const rock = document.getElementById('Rock');
const paper = document.getElementById('Paper');
const scissors = document.getElementById('Scissors');
const rematch = document.getElementById('rematch'); 

//Rematch button which simply reloads the page
function rematchButton(){
    location.reload();
}

rematch.addEventListener('click', function(){
    rematchButton(); 
});

//Function to get random choice for the Computer Move
function computerPlay() {
    let cMove = Math.random();
        if (cMove < .34) {
            cMove = 'Rock';
        } else if (cMove <.64){
            cMove = 'Paper';
        } else {
            cMove = 'Scissors'
        }
    return(cMove);     
}
//Player Choice and Start Round 
function main() { 
    rock.addEventListener('click', function(){
        playRound('Rock');
    });
    paper.addEventListener('click', function(){
       playRound('Paper');
    });
    scissors.addEventListener('click', function(){
        playRound('Scissors');
    })
}

//Function for Each Round
function playRound(pChoice) {
    playerChoice = pChoice;
    computerChoice = computerPlay();
    //Rules for Draw
    if  (playerChoice === computerChoice) {
        draw();
    //Rules for Player Win
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors'|| playerChoice === 'Paper' && computerChoice === 'Rock' || playerChoice === 'Scissors' && computerChoice === 'Paper') {
        win(); 
    //Rules for Computer Win
    } else if (playerChoice === 'Rock' && computerChoice === 'Paper'|| playerChoice === 'Paper' && computerChoice === 'Scissors' || playerChoice === 'Scissors' && computerChoice === 'Rock') {
        lose();
    }
}

main();

//Activates on win
function win() {
    if (playerScore < 5 & computerScore < 5){
        playerScore++; 
        playerDiv.innerHTML = playerScore; 
        winnerDiv.innerHTML = ('You Win! ' + playerChoice + ' beats ' + computerChoice + '!');
    }
    if (playerScore === 5 && computerScore < 5) {
        winnerDiv.innerHTML = ('You Win the Match!');
        return; 
    }
}
//Activates on lose
function lose() {
    if (playerScore < 5 & computerScore < 5){
        computerScore++; 
        computerDiv.innerHTML = computerScore;
        winnerDiv.innerHTML = ('You Lose! ' + computerChoice + ' beats ' + playerChoice + '!');
    } 
    if (computerScore === 5 && playerScore < 5) {
        winnerDiv.innerHTML = ('You Lose the Match...');
        return; 
    }
}

//Activates on draw 
function draw() {
    if (playerScore < 5 && computerScore < 5){
        winnerDiv.innerHTML = ('It\'s a tie!');
    }
}