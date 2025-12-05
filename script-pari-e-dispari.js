// Faccio scegliere all'utente fra pari o dispari
let sceltaUtente = prompt("scegli fra pari o dispari");
console.log(sceltaUtente);

// gli chiedo di inserire un numero da 1 a 5
let numUtente = parseInt(prompt("scegli un numero compreso tra 1 e 5"));
console.log("Hai scelto", numUtente);

// faccio generare un numero random al computer (1-5) con una funzione
let numComputer = numRandom(1,5);
console.log("Il tuo avversario ha scelto", numComputer);

// faccio la somma del numero dell'utente e quello del computer
let sommaNum = numUtente + numComputer
console.log("La somma dei 2 numeri è", sommaNum);


// creo una funzione che mi dice se il numero è pari o dispari
let identPariODispari = numPariODispari(sommaNum)
console.log("Il numero quindi è", identPariODispari)

// dichiaro il nome del vincitore
if (sceltaUtente === identPariODispari) {
    console.log("Hai vinto!!!")
} else {
    console.log("Hai perso!")
}



// FUNZIONI
function numRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
}

function numPariODispari(sommaNum) {
    if (sommaNum % 2 === 0){
        return "pari";
    } else {
        return "dispari";
    }
}