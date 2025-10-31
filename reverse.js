let inputString = "sveiki";

function reverseString(str) {
    // izmantot reverse metodi
    return str.split('').reverse().join('');
}

console.log("Oriģināls: " + inputString);
console.log("Apgriezts: " + reverseString(inputString));