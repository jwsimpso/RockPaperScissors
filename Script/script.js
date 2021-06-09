window.onload = function(){
    console.log("window Loaded");
   
};

document.querySelector("body").innerHTML=`<h1>Thanks for coming to play Rock, Paper, Scissors.</h1><h2 id="smallHeader">Click the new game button to get started</h2>`;

function createGameButton(){
    newGameButton = document.createElement("Button");
    newGameButton.classList.add("btn", "newGame");
    newGameButton.innerText="New Game";
    document.querySelector("#smallHeader").append(newGameButton);
  
} 

createGameButton();

newGameButton.addEventListener("click", startNewGame);
let losses = 0;
let wins = 0;
let ties = 0;

function startNewGame() {
   let newGameButton = document.querySelector(".newGame");
   let gameHeader = document.querySelector("h1")
   gameHeader.innerHTML="<h1>Please choose Rock, Paper, or Scissors</h1>";
    document.querySelector("h2").innerHTML=("");
   document.querySelector("h2").style.display="block";
   playerChoiceDiv = document.createElement("div")
   playerChoiceDiv.style.display="block";
   playerChoiceDiv.classList.add('choices');
    let playerChoices = `<div class="choices">
    <img src="./Images/theRock.jpg" label="rock" alt="rock" id="rock" class="buttonName"></img>
    <img src="./Images/paperMoney.jpeg" alt=
    paper" label="paper" id="paper" class="buttonName"></img>
    <img src="./Images/scissors.jpg" label="scissors" alt="scissors" id="scissors" class="buttonName"></img>
</div>`
    document.querySelector("#smallHeader").append(playerChoiceDiv);
    playerChoiceDiv.innerHTML=(playerChoices);
     
  
function drawScoreBoard() {
    let scoreBoard = document.createElement("div");
   scoreBoard.classList.add('scoreboard');
   scoreBoard.innerHTML=`<h1>Wins: ${wins}  Losses: ${losses}  Ties: ${ties}</h1>`
   scoreBoard.style.display="block";
   document.querySelector('#smallHeader').append(scoreBoard);
}
    
const buttonArray = ["rockButton", "paperButton", "scissorsButton"]
buttonArray[0] = document.querySelector("#rock");
buttonArray[1] = document.querySelector("#paper");
buttonArray[2] = document.querySelector("#scissors");
const cpuChoice = (Math.round(Math.random()*(buttonArray.length-1)));




for (const button of buttonArray) {
    button.addEventListener('click', function() {
   if (button.id === buttonArray[cpuChoice].id){
        playerChoiceDiv.innerHTML=(`<h1 class='game-results'>The computer chose ${buttonArray[cpuChoice].id}. You tied.</h1>`)
        ties++;
        console.log("Ties:" + ties);
        console.log("Wins:" + wins);
        console.log("Losses:" + losses);        
        let playAgainButton = document.createElement("button");
        playAgainButton.classList.add('play-again-button');
        playAgainButton.innerText="Play again?";
        playAgainButton.style.display="block";
        document.querySelector(".game-results").append(playAgainButton);
        drawScoreBoard();
        playAgainButton.addEventListener('click', e => {
            startNewGame();
        }); 
        return ties;      
    }
    
    if (button.id === "rock" && buttonArray[cpuChoice].id === "paper" || button.id ==="paper" && buttonArray[cpuChoice].id ==="scissors" || button.id ==="scissors" && buttonArray[cpuChoice].id ==="rock") {
        playerChoiceDiv.innerHTML=(`<h1 class='game-results'>The computer chose ${buttonArray[cpuChoice].id}. You Lose.</h1>`);
        losses++;
        console.log("Ties:" + ties);
        console.log("Wins:" + wins);
        console.log("Losses:" + losses);
        let playAgainButton = document.createElement("button");
        playAgainButton.classList.add('play-again-button');
        playAgainButton.innerText="Play again?";
        playAgainButton.style.display="block";
        document.querySelector(".game-results").append(playAgainButton);
        drawScoreBoard();
        playAgainButton.addEventListener('click', e => {
            startNewGame();
        });  
        return losses;
    }
   
    if (button.id === "rock" && buttonArray[cpuChoice].id === "scissors" || button.id === 
    "scissors" && buttonArray[cpuChoice].id === "paper" || button.id === "paper" && buttonArray[cpuChoice].id === "rock" )
    {     playerChoiceDiv.innerHTML=(`<h1 class='game-results'>The computer chose ${buttonArray[cpuChoice].id}. You Win.</h1>`); 
        wins++;
        console.log("Ties:" + ties);
        console.log("Wins:" + wins);
        console.log("Losses:" + losses);
        let playAgainButton = document.createElement("button");
        playAgainButton.classList.add('play-again-button');
        playAgainButton.innerText="Play again?";
        playAgainButton.style.display="block";
        document.querySelector(".game-results").append(playAgainButton);
        drawScoreBoard();
        playAgainButton.addEventListener('click', e => {
            startNewGame();
        });  
        return wins;
    };


    
})}


let resetGame = function resetGame(){
    
};


resetGame();

}

















// randValue = cpuSelection();

// let val = window.addEventListener("keydown", e =>{
    
//     console.log (e.key);
    
// });
// console.log("val is " + val);
// // console.log(playerChoice);
// // let rockChoice = rockButton = document.querySelector("#rock");
// // rockButton.addEventListener("click", (e) => {
// //     console.log(e);
// // });

// document.addEventListener('keydown',  userKeyPress);
// let playerChoice;

// function userKeyPress(e){
//     if (e.key === "r" || e.key === "p" || e.key === "s"){
//     playerChoice =  e.key;
//     return playerChoice}
//     else {
//         console.log("Please choose r, p, or s");
//     }
// }

// console.log(playerChoice);
// let paperChoice = paperButton = document.querySelector("#paper");
// paperButton.addEventListener("click", (e) => {
//     console.log(e);
// });



// let scissorChoice = scissorsButton = document.querySelector("#scissors");
// scissorsButton.addEventListener("click", (e) => {
//     console.log(e.target.id);
//    playerChoice = e.target.id;
// });


// function playGame(cpuChoiceList, randValue) {
//     console.log(cpuChoiceList[randValue]);
    
    
// }

// if (rockChoice) {
//     console.log(rockChoice);
//     playerChoice = rockChoice.id;
// }

// playGame(cpuChoiceList, randValue, playerChoice);
// let gameValue = cpuChoiceList[randValue];
// if (gameValue == playerChoice) {
//     console.log("This one was a tie.")
// }
// ;
// console.log(playerChoice);
// playGame(cpuChoiceList, randValue, playerChoice);