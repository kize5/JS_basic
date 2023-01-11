// you can write js here
console.log('exo-3');

let playerInput = prompt("Your choice ( rock, paper, scissors) ?");

function getPlayerChoice(playerInput) {
    if (playerInput) {
        let lowPlayerInput = playerInput.toLowerCase();
        if (lowPlayerInput === "rock" || lowPlayerInput === "paper" || lowPlayerInput === "scissors") {
            return lowPlayerInput;
        } else {
            console.log("Saisie incorrect");
        }
    } else {
        console.log("Rien de saisie");
    }
}

function getComputerChoice () {
    let rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        return "rock";
    } else if (rand === 1) {
        return "paper";
    } else
        return "scissors"
}

/*Je préfère stocker le résultat des functions pour la simplicité*/
let player = getPlayerChoice(playerInput);
let pc = getComputerChoice();
function findWinner (player, pc) {
    console.log("Coup du joueur : " + player);
    console.log("Coup du pc : " + pc);
    if (player === pc) {
        return "Tied";
    } else {
        if (player === "rock") {
            if (pc === "scissors") {
                return "Player win";
            } else return "Pc win";
        }
        if (player === "scissors") {
            if (pc === "paper") {
                return "Player win";
            } else return "Pc win";
        }
        if (player === "paper") {
            if (pc === "rock") {
                return "Player win"
            } else return "Pc win"
        }
    }
}


console.log(findWinner(player, pc));