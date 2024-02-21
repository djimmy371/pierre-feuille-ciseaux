let gameMode = "solo";
const choices = ["pierre", "feuille", "ciseaux"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay")
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() *3)]

    let result = "";

    if(playerChoice === computerChoice){
        result = "C'est une égalité";
    }
    else{
        switch(playerChoice) {
        case "pierre":
                result = (computerChoice === "ciseaux") ? "VOUS AVEZ GAGNEZ" : "VOUS AVEZ PERDU";
                 break;
        case "feuille":
                 result = (computerChoice === "pierre") ? "VOUS AVEZ GAGNEZ" : "VOUS AVEZ PERDU";
                 break;
        case "ciseaux":
                 result = (computerChoice === "feuille") ? "VOUS AVEZ GAGNEZ" : "VOUS AVEZ PERDU";
                 break;
        }
    }

    playerDisplay.textContent = `Joueur: ${playerChoice}`;
    computerDisplay.textContent = `Ordinateur: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("gagnerText", "perduText")

    switch(result) {
        case "VOUS AVEZ GAGNEZ":
        resultDisplay.classList.add("gagnerText");
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        break

        case "VOUS AVEZ PERDU":
        resultDisplay.classList.add("perduText");
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        break;
    }
}
