// Faccio scegliere all'utente fra pari o dispari
let sceltaUtente = prompt("scegli fra pari o dispari");
console.log(sceltaUtente);

// gli chiedo di inserire un numero da 1 a 5
let numUtente = parseInt(prompt("scegli un numero compreso tra 1 e 5"));
console.log(numUtente);

// faccio generare un numero random al computer (1-5) con una funzione
let numComputer = numRandom(1,5);
console.log(numComputer);

// faccio la somma del numero dell'utente e quello del computer
// creo una funzione che mi dice se il numero è pari o dispari
// dichiaro il nome del vincitore

// FUNZIONI
function numRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
}