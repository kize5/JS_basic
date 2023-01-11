// you can write js here

console.log('exo-4');

let secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily",
    "the", "first", "time,", "it's", "about", "what", "you", "can", "figure",
    "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

/*Retier le dernier élément du tableau secretMessage*/
// function popIt (x) {
//     let oneLess = x.pop();
//     return oneLess;
// }
// popIt(secretMessage);

secretMessage.pop();
secretMessage.push('to', 'program');
secretMessage[6] = "right";
secretMessage.shift();
secretMessage.unshift("Programming");
secretMessage.splice(5, 5, "know");
phrase = secretMessage.join(' ');
console.log(phrase); /*Test function popIt*/