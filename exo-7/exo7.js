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


/*Insérer la traduction de type dans le data.js*/
jsonDatas.forEach((e) => {
    Object.keys(trad[0]).forEach((elem) => {
        if (e.type === (elem)) {
            e.traduction = trad[0][elem];
        }
    })
})

let varAscName

/*Tri la data par name croissant*/
function ascName() {
    varAscName = jsonDatas.sort(function (a, b) {
        let nameA = a.name.toUpperCase(); // ignore upper and lowercase
        let nameB = b.name.toUpperCase(); // ignore upper and lowercase
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
    varDescName = jsonDatas.sort(function (a, b) {
        let nameA = a.name.toUpperCase(); // ignore upper and lowercase
        let nameB = b.name.toUpperCase(); // ignore upper and lowercase
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
    varAscPrice = jsonDatas.sort(function (a, b) {
        let priceA = a.price; // ignore upper and lowercase
        let priceB = b.price; // ignore upper and lowercase
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
    varDescPrice = jsonDatas.sort(function (a, b) {
        let priceA = a.price; // ignore upper and lowercase
        let priceB = b.price; // ignore upper and lowercase
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

/*Affiche la data sur la page main*/
function main(ball) {
    document.getElementById("ici").innerHTML = "";
    ball.forEach((e) => {
        document.getElementById("ici").innerHTML += `                       
        <div>Name : ${e.name}</div>
        <div>Price : ${e.price}</div>
        <div>Quantity : ${e.quantity}</div>
        <div>Type : ${e.type}</div>
        <div>Traduction : ${e.traduction}</div>
        <div>Description : ${e.description}</div>
        <br>
    `;
    });
}

main(jsonDatas);

/*Logique pour choisir quoi afficher selon le filtre de tri*/
function choose(x) {
    let ball = jsonDatas;
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
    console.log(ball);
    if (!isEmpty) {
        document.getElementById("ici2").innerHTML = "";
    }
    ball.forEach((e) => {
        if (x === e.type || x === e.traduction) {
            document.getElementById("ici").innerHTML = "";
            iciDiv2.innerHTML += `                       
        <div>Name : ${e.name}</div>
        <div>Price : ${e.price}</div>
        <div>Quantity : ${e.quantity}</div>
        <div>Type : ${e.type}</div>
        <div>Traduction : ${e.traduction}</div>
        <div>Description : ${e.description}</div>
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
            if (x === e.type && e.quantity > 0 || x === e.traduction && e.quantity > 0) {
                document.getElementById("ici").innerHTML = "";
                iciDiv2.innerHTML += `                       
        <div>Name : ${e.name}</div>
        <div>Price : ${e.price}</div>
        <div>Quantity : ${e.quantity}</div>
        <div>Type : ${e.type}</div>
        <div>Traduction : ${e.traduction}</div>
        <div>Description : ${e.description}</div>
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



    let form = document.getElementById('form');
console.log(form)
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("je passe là")
        let formData = new FormData(form);
        // for (let item of formData) {
        //     console.log(item[0], item[1]);
        // }
    //
        let name = formData.get("name");
        let type = formData.get("type");
        let desc = formData.get("desc");
        let price = formData.get("price");
        let qty = formData.get("qty");
        console.log(name, type, desc, price, qty);
    })




