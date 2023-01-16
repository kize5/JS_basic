console.log("exo-7");

console.log(jsonDatas);

const isEmpty = document.getElementById('ici2').innerHTML === "";

let trad = [{
    car: "voiture",
    house: "maison",
    game: "jeux",
    videoGame: "jeux vidéos",
    show: "spectacle",
}]

/*Créer un nouveau json avec la bonne structure*/
let newJson = [];
function jsonv2 () {
    for (let i = 0; i < jsonDatas.length; i++) {
        let actualE = jsonDatas[i];
        let newObject = {
            "type": actualE.type,
            "items": [
                {
                    "name": actualE.name,
                    "description": actualE.description,
                    "price": actualE.price,
                    "quantity": actualE.quantity,
                    "contact": {
                        "lastName": fakeNom(),
                        "firstName": fakePrenom(),
                        "address": fakeAdress()
                    }
                }
            ]
        };
        newJson.push(newObject);
    }
}
/*Appel du nouveau json*/
jsonv2();
console.log(newJson);


/*Insérer la traduction de type dans data.js*/
function traducteur() {
    newJson.forEach((e) => {
        Object.keys(trad[0]).forEach((elem) => {
            if (e.type === (elem)) {
                e.traduction = trad[0][elem];
            }
        })
    })
}

traducteur();

let varAscName

/*Tri la data par name croissant*/
function ascName() {
    varAscName = newJson.sort(function (a, b) {
        let nameA = a.items[0].name.toUpperCase(); // ignore upper and lowercase
        let nameB = b.items[0].name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        // names must be equal
        return 0;
    });
}

let varDescName

/*Tri la data par name décroissant*/
function descName() {
    varDescName = newJson.sort(function (a, b) {
        let nameA = a.items[0].name.toUpperCase(); // ignore upper and lowercase
        let nameB = b.items[0].name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return 1;
        }
        if (nameA > nameB) {
            return -1;
        }
        // names must be equal
        return 0;
    });
}

let varAscPrice;

/*Tri la data par prix croissant*/
function ascPrice() {
    varAscPrice = newJson.sort(function (a, b) {
        let priceA = a.items[0].price; // ignore upper and lowercase
        let priceB = b.items[0].price; // ignore upper and lowercase
        if (priceA < priceB) {
            return -1;
        }
        if (priceA > priceB) {
            return 1;
        }
        return 0;
    });
}

let varDescPrice;

/*Tri la data par prix décroissant*/
function descPrice() {
    varDescPrice = newJson.sort(function (a, b) {
        let priceA = a.items[0].price; // ignore upper and lowercase
        let priceB = b.items[0].price; // ignore upper and lowercase
        if (priceA < priceB) {
            return 1;
        }
        if (priceA > priceB) {
            return -1;
        }
        return 0;
    });
}

let onMain = true;

/*Permet simplement de passer onMain à false*/
function onMainFasle() {
    onMain = false;
}
function onMainTrue() {
    onMain = true;
}

/*Affiche la data sur la page main*/
function main(ball) {
    if (!isEmpty) {
        document.getElementById("ici2").innerHTML = "";
    }
    document.getElementById("ici").innerHTML = "";
    ball.forEach((e) => {
        document.getElementById("ici").innerHTML += `
        <div class="box">                       
        <div>Name : ${e.items[0].name}</div>
        <div>Price : ${e.items[0].price}</div>
        <div>Quantity : ${e.items[0].quantity}</div>
        <div>Type : ${e.type}</div>
        <div>Traduction : ${e.items[0].traduction}</div>
        <div>Description : ${e.items[0].description}</div>
        </div>
        <br>
    `;
    });
}


main(newJson);

/*Logique pour choisir quoi afficher selon le filtre de tri*/
function choose(x) {
    let ball = newJson;
    if (x === 'ascN') {
        ascName();
        ball = varAscName;
    } else if (x === "descN") {
        descName();
        ball = varDescName;
    } else if (x === "ascP") {
        ascPrice();
        ball = varAscPrice;
    } else if (x === "descP") {
        descPrice();
        ball = varDescPrice;
    } if (x === "contact") {
        console.log("Je passe par contact")
        showContact();
        return 1;
    }
    if (onMain) {
        console.log("onMain")
        main(ball)
    } else {
        if (document.getElementById("check").checked) {
            console.log("Je grab que ce qui reste en stock")
            grabStock(ball)
        } else {
            grabAll(ball)
            console.log("Je grab All")
        }
    }
}

let iciDiv2 = document.getElementById("ici2");

/*Affiche tous les éléments sans prendre compte du stock*/
function grabAll(ball) {
    let x = document.getElementById("inpTxt").value;
    x = x.toLowerCase();
    if (!isEmpty) {
        document.getElementById("ici2").innerHTML = "";
    }
    ball.forEach((e) => {
        if (x === e.type || x === e.items[0].traduction) {
            document.getElementById("ici").innerHTML = "";
            iciDiv2.innerHTML += `                       
        <div>Name : ${e.items[0].name}</div>
        <div>Price : ${e.items[0].price}</div>
        <div>Quantity : ${e.items[0].quantity}</div>
        <div>Type : ${e.type}</div>
        <div>Traduction : ${e.items[0].traduction}</div>
        <div>Description : ${e.items[0].description}</div>
        <br>
    `;
        }
    })
}

/*Affiche uniquement les éléments qui sont encore en stock*/
function grabStock(ball) {
    if (document.getElementById("check").checked) {
        let x = document.getElementById("inpTxt").value;
        x = x.toLowerCase();
        if (!isEmpty) {
            document.getElementById("ici2").innerHTML = "";
        }
        ball.forEach((e) => {
            if (x === e.type && e.items[0].quantity > 0 || x === e.items[0].traduction && e.items[0].quantity > 0) {
                document.getElementById("ici").innerHTML = "";
                iciDiv2.innerHTML += `                       
        <div>Name : ${e.items[0].name}</div>
        <div>Price : ${e.items[0].price}</div>
        <div>Quantity : ${e.items[0].quantity}</div>
        <div>Type : ${e.type}</div>
        <div>Traduction : ${e.items[0].traduction}</div>
        <div>Description : ${e.items[0].description}</div>
        <br>
    `;
            }
        })
    }
}

/*Permet de lancer la recherche avec la touche entrée*/
document.querySelector('#inpTxt').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {

        onMainFasle();
        choose('x');
    }
});


/*Permet l'ajoute d'un objet à la base de donnée via le formulaire*/

    let form = document.getElementById('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("je passe là")
        if (form.tagName === "FORM") {
            let formData = new FormData(form);
            const data = Object.fromEntries(formData);
            jsonDatas.push(data);
            console.log("Json data après ajout de l'entrée du forme => ")
            console.log(jsonDatas);
        } else {
            console.error("L'élément récupérer n'est pas un formulaire")
        }
        traducteur();
        choose('x');
    })

function showContact () {
        if (!isEmpty) {
            document.getElementById("ici2").innerHTML = "";
        }
    newJson.forEach((e) => {
        let contact = e.items[0].contact;
        document.getElementById("ici").innerHTML = "";
        iciDiv2.innerHTML += `                       
        <div>Nom : ${contact.lastName}</div>
        <div>Prénom : ${contact.firstName}</div>
        <div>Adresse : ${contact.address}</div>
        <br>
        `
        console.log(contact);
    })
}

/*fake les noms*/
function fakeNom ()  {
    let nom = ["Herbelles", "Bochard", "Bochu", "Gonthier", "Geffray", "Sirbal", "Rey", "Cormier", "Allais", "Escure", "Chaves", "Nougier"]
    let nomR
    return nomR = nom[Math.floor(Math.random()*nom.length)]
}
/*fake prenom*/
function fakePrenom () {
    let prenom = ["Souheil", "Brian", "Brice", "Laurent", "Julie", "David", "Gregoire", "Axel", "Chris", "Camille", "NicoG", "NicoB"]
    let prenomR
    return prenomR = prenom[Math.floor(Math.random()*prenom.length)]
}
/*fake adress*/
function fakeAdress () {
    let adress = ["15 rue des Nations Unies - Saint-benoît", "1 rue Porte d'Orange - Cenon", "35 rue des Chaligny - Nice", "23 rue du Faubourg National - Thiais", "5 rue de Lille - Aubagne", "42 place de Miremont - Villeneuve-saint-georges", "48 quai Saint-Nicolas - Tours", "81 rue Clement Marot - Pessac", "58 rue Grande Fusterie - Bron", "80 avenue Voltaire - Mâcon", "32 boulevard Albin Durand - Cergy", "58 rue Reine Elisabeth - Menton"]
    let adressR
    return adressR = adress[Math.floor(Math.random()*adress.length)]
}



