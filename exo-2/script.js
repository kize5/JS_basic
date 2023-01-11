// you can write js here
console.log('exo-2');

const myDate = new Date();
let dayOfWeek = myDate.getDay();
let hour = myDate.getHours();
console.log(hour); /*Test = Affiche un nombre entier*/
console.log(dayOfWeek); // Test = Affiche un nombre entier
console.log(myDate) /*Test = Afficher myDate*/
let week = "Perdu pas encore le week-end"
let weekEnd = "Yes c'est le week-end"

let isTesting = true;

/*Si isTesting est en True, alors on a un prompt pour entrer jour/heure*/
if (isTesting === true) {
    dayOfWeek = prompt("Entrer le jour de la semaine en chiffre");
    hour = prompt("Entrez l'heure")
}

free :
if (dayOfWeek > 0 && dayOfWeek < 6) /*Détermine si on est en week-end ou non*/
{
    if (dayOfWeek === "1" && hour < 9 )
    {
        console.log(weekEnd)
        break free;
    }
    if (dayOfWeek === "5" && hour >= 17)
    {
        console.log(weekEnd)
        break free;
    }
    console.log(week)
} else console.log(weekEnd)

