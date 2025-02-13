/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

let userWord1 = prompt("Scrivi una parola");
let userWord2 = prompt("Scrivi un'altra parola");

if(userWord1 > userWord2){
    console.log(`${userWord2} ${userWord1}`);
    
}else if(userWord2 > userWord1){
    console.log(`${userWord1} ${userWord2}`);
}