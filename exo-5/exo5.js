// you can write js here

console.log('exo-5');

const input = "Coder c'est rigolo en JavaScript";
const vowels = "aeiouy"; /*str agis comme un tableau*/
resultArray = [];

/*Revenir pour utiliser la method indexOf() */
for (let i=0; i < input.length; i++) {
    for (let x=0; x < vowels.length; x++){
        if (input[i] === vowels[x]) {
            resultArray.push(input[i])
            console.log(input[i])
        }
    }
}
resultArray.join();
// resultArray.toUpperCase();
console.log(resultArray.join(" ").toUpperCase())