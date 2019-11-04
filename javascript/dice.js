document.querySelector("#roller").addEventListener("click", rollBothDice);

function rollBothDice() {
    var player1Num = rollDice(1);
    var player2Num = rollDice(2);
    
    if (player1Num > player2Num) {
        document.querySelector("h1").textContent = "Player 1 Wins";
    } else if (player2Num > player1Num) {
        document.querySelector("h1").textContent = "Player 2 Wins";
    } else if (player2Num === player1Num) {
        document.querySelector("h1").textContent = "Tie";
    }
}

function rollDice(diceNum) {
    var dice1 = (Math.random() * 6);
    dice1 = Math.floor(dice1 + 1);

    if (dice1 === 1) {
        document.querySelector(".img" + diceNum).setAttribute("src", "images/dice1.png");
    } else if (dice1 === 2) {
        document.querySelector(".img" + diceNum).setAttribute("src", "images/dice2.png");
    } else if (dice1 === 3) {
        document.querySelector(".img" + diceNum).setAttribute("src", "images/dice3.png");
    } else if (dice1 === 4) {
        document.querySelector(".img" + diceNum).setAttribute("src", "images/dice4.png");
    } else if (dice1 === 5) {
        document.querySelector(".img" + diceNum).setAttribute("src", "images/dice5.png");
    } else {
        document.querySelector(".img" + diceNum).setAttribute("src", "images/dice6.png");
    }

    return dice1;
}