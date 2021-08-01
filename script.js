let b1 = document.getElementById("b1").value;
let b2 = document.getElementById("b2").value;
let b3 = document.getElementById("b3").value;
let b4 = document.getElementById("b4").value;
let b5 = document.getElementById("b5").value;
let b6 = document.getElementById("b6").value;
let b7 = document.getElementById("b7").value;
let b8 = document.getElementById("b8").value;
let b9 = document.getElementById("b9").value;

let divEntry = document.getElementsByClassName("box");

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
        player2 = 'O'
    } else {
        player1 = 'O'
        player2 = 'X'
    }
}

// //Player Tracker
// function playerTracker () {
// }

//Event Listener for Div boxes to add X or O
playerChooser();
for (let i = 0; i < divEntry.length; i++) {
    divEntry[i].addEventListener("click", (e) => {
      if (counter1 <= counter2) { 
        divEntry[i].innerHTML = player1;
        counter1++;
    } else if (counter1 > counter2) {
            if (divEntry.textContent !== 'X' && divEntry.textContent !== 'O') {
                divEntry[i].innerHTML = player2
                counter2++
            }
        }
    })
}
