/* L'utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore. */

let userNumber1 = prompt("Scrivi un numero");
let userNumber2 = prompt("Scrivi un altro numero");

if(userNumber1 > userNumber2){
    console.log(userNumber1);
    
} else if(userNumber2 > userNumber1){
    console.log(userNumber2);        
} else{
    alert("Devi scrivere due numeri diversi!!")
}