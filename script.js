let b1 = document.getElementById("b1").value;
let b2 = document.getElementById("b2").value;
let b3 = document.getElementById("b3").value;
let b4 = document.getElementById("b4").value;
let b5 = document.getElementById("b5").value;
let b6 = document.getElementById("b6").value;
let b7 = document.getElementById("b7").value;
let b8 = document.getElementById("b8").value;
let b9 = document.getElementById("b9").value;
let player1Score = document.getElementById("player1Score");
let player2Score = document.getElementById("player2Score");
let selector = document.getElementById("selector");

let divEntry = document.getElementsByClassName("box");
let button = document.getElementById('button');
let winNotifier = document.getElementById('winNotifier');

//Variables
counter1 = 0;
counter2 = 0;
console.log(divEntry[0])

let player1;
let player2;
let playerRandomiser = Math.floor(Math.random() * 2 + 1);

//Player Chooser
function playerChooser() {
    if (playerRandomiser === 1) {
        player1 = 'X'
        // selector + '[X]'
        player2 = 'O'
    } else {
        player1 = 'O'
        player2 = 'X'
    }
}

//Update Player Score
function updatePlayerScore(player) {
    if ('X' === player1) {
        let currentScore1 = Number(player1Score.innerText);
        player1Score.innerHTML = currentScore1 + 1
    } else if ('X' === player2) {
        let currentScore2 = Number(player2Score.innerText);
        player2Score.innerHTML = currentScore2 + 1
    } 
}

//function to reset grid
button.addEventListener("click", (e) => {
    for (let i = 0; i < divEntry.length; i++) {
        divEntry[i].innerHTML = ""
    }
    winNotifier.innerHTML = ""
});


//Event Listener for Div boxes to add X or O 
playerChooser();
let currentPlayer = player1;
for (let i = 0; i < divEntry.length; i++) {
    divEntry[i].addEventListener("click", (e) => {
        const isEmpty = !divEntry[i].textContent;
        if (!isEmpty) {
            return;
        }
        if (currentPlayer === player1) {
            divEntry[i].innerHTML = player1;
            currentPlayer = player2;
        } else if (currentPlayer === player2) {
            divEntry[i].innerHTML = player2;
            currentPlayer = player1;
        }

        winChecker();
    })
}


//Win Checker - loop through all divs
let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

function winChecker() {
    for (let i = 0; i < winConditions.length; i++) {
        winConditionsA = winConditions[i];
        let sumX = 0;
        let sumO = 0;
        console.log(winConditions[i])
        for (const conditions of winConditionsA) {
            console.log(divEntry[conditions])
            if (divEntry[conditions].textContent === 'X') {
                sumX++
            }
            if (divEntry[conditions].textContent === 'O') {
                sumO++
            }
        }
        if (sumX === 3) {
            updatePlayerScore('X');
            winNotifier.innerHTML = `${player1} is the Winner`
        } else if (sumO === 3) {
            updatePlayerScore('O');
            winNotifier.innerHTML = `${player2} is the Winner`
        }
    }

}