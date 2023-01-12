console.log("exo-7");

console.log(jsonDatas);

// jsonDatas.forEach((e) => {
//     console.log(e)
// })

let trad = [{
    car: "Voiture",
    house: "Maison",
    game: "Jeux",
    videoGame: "Jeux Vidéos",
    show: "spectacle",
}]

trad.forEach((t) => {
    console.log(t);
    console.log(t.car)
})

// console.log(trad.car)


jsonDatas.forEach((e) => {
    Object.keys(trad[0]).forEach((elem) => {
        if (e.type === (elem)) {
            e.traduction = trad[0][elem];
        }
    })
})

let iciDiv = document.getElementById("ici");
jsonDatas.forEach((e) => {
    iciDiv.innerHTML += `
        <div>Name : ${e.name}</div>
        <div>Price : ${e.price}</div>
        <div>Quantity : ${e.quantity}</div>
        <div>Type : ${e.type}</div>
        <div>Traduction : ${e.traduction}</div>
        <div>Description : ${e.description}</div>
        <br>
    `;
    console.log(e);
});

