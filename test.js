let score = 3;
const choices = ["Rock", "Paper", "Scissors"];
let high_score = 0 ;

function getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function updateScore(change) {
    
    if (change === 0) {
        document.getElementById("score").innerHTML = "Score Successfully Reset!";
        score = 0;
    } else {
        score += change;
 
        if (score > high_score){
            high_score = score;
            document.getElementById("high-score").innerHTML = "High Score: " + high_score;
        }
    
        document.getElementById("score").innerHTML = "Score: " + score;
    }
}

function play(playerChoice) {
    const computerChoice = getRandomChoice();
    document.getElementById("playerChoice").src = "images/" + playerChoice.toLowerCase() + "-icon.png";
    document.getElementById("computerChoice").src = "images/" + computerChoice.toLowerCase() + "-icon.png";

    if (playerChoice === computerChoice) {
        // It's a tie
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        updateScore(1);
    } else {
        updateScore(-1);
    }
}

function reset() {
    updateScore(0);
    document.getElementById("playerChoice").src = "";
    document.getElementById("computerChoice").src = "";
}
