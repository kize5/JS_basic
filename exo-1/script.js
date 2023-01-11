// you can write js here
console.log('hello from file');

let kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
/*Je demande à l'utilisateur de via le prompt déclare la variable kelvins*/
let celsuis = kelvins - 273
let fahrenheits = celsuis * (9/5) + 32 /*J'utilise la variable celsuis + un calcul pour déclarer ma variable fahren*/

fahrenheits = Math.floor(fahrenheits) /*J'arrondis fahrenheits*/
console.log("La températeure est de " + fahrenheits + " degrés fahrenheits") /*Console log pour vérifier le résultat*/


