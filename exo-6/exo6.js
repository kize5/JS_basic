// Cours 8 de Codecademy
console.log("exo-6");

const joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
// console.log(joeInfo.cars);

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 4;
// console.log(joeInfo.bathrooms);
// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information.
joeInfo.garage = true;
// console.log(joeInfo.garage)

const team = {
    players : [{
        firstName: "Pablo",
        lastName: "Sanchez",
        age: 11
    },
    ],
    games : [{
        opponent: "Broncos",
        teamPoints: 42,
        opponentPoints: 27
    },
    ]
}

function addPlayer (first, last, age) {
    const newplayer = {
        firstName: first,
        lastName: last,
        age: age
    }
    team.players.push(newplayer);
}


addPlayer("ok", "why", 50);
addPlayer("Billy", "none", 25);
addPlayer("gogo", "lul", 75);
addPlayer("Joe", "Lopez", 99);
console.log(team.players)

function addGames (opponent, teamPoints, opponentPoints) {
    const newGame = {
        opponent : opponent,
        teamPoints : teamPoints,
        opponentPoints : opponentPoints
    }
    team.games.push(newGame);
}

addGames("Osef", 50, 25);
addGames("GG", 32, 15);
console.log(team.games);


let totalTeamPoint = 0;
let opponentAvg = 0;
let a = 0;
team.games.forEach((e) => {

    totalTeamPoint += e.teamPoints;
});

console.log("Point total de l'équipe : " + totalTeamPoint);

team.games.forEach((e) => {
    let b = 0;
    a++;
    b += e.opponentPoints;
    let avg = b/a;
    opponentAvg += avg;
});

console.log("Moyenne des points de l'équipe adv : " + opponentAvg);

let count = 0;
function old () {
    team.players.forEach((e) =>
    {
        if (e.age > count) {
            count = e.age;
        }
    })
    team.players.forEach((e) =>
    {
        if (e.age === count) {
            player = "Le joueur le plus agé est : " + e.firstName + " " + e.lastName + " qui à " + e.age;
        }
    })
}

(old());
console.log(player);