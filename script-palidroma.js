// chiedo all'utente di inserire una parola all'interno del prompt
const parola = prompt("digita una parola per scoprire se è palidroma!")
console.log(parola)

// creo una funzione che mi riscriva le parole al contrario 
const parolaInvertita = esaminatoreParolaPalindroma(parola)

// do una condizione in mdo da capire se la parola al contrario è uguale a quella originale
if (parola === parolaInvertita) {
    console.log("La parola è palindroma")
} else {
    console.log("La parola non è palindroma")
}

// FUNZIONI 
function esaminatoreParolaPalindroma (parola) {
    let parolaInvertita = ""

    for (let i = parola.length -1; i >= 0; i--) {
        parolaInvertita += parola[i];
    }

    return parolaInvertita;
}