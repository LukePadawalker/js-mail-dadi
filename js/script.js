console.log('js ok');

// Esercizio 1 "Dadi"

/*

1 - stabilire il numero del giocatore
2 - stabilire il numero del computer
3 - se il numero del giocatore e piu grande del numero del computer
        allora vince il giocatore
    se invece il numero del computer è maggiore del numero del giocatore
        allora vince il computer
    altrimenti 
        pareggio


*/

const playerNumber = Math.floor(Math.random() * 6) + 1;
console.log(playerNumber);

const cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log(cpuNumber);

let answer;


if (playerNumber > cpuNumber){
    console.log("ha vinto il giocatore");
    answer = "ha vinto il giocatore";


} else if (cpuNumber > playerNumber){
    console.log("ha vinto il computer");
    answer = "ha vinto il computer";


} else{
    console.log('pareggio')
    answer = "pareggio";


}

document.getElementById('playernumber').innerText = `Numero del giocatore: ${playerNumber}`;

document.getElementById('cpunumber').innerText = `Numero del computer: ${cpuNumber}`;

document.getElementById('result').innerText = `Vincitore = ${answer}`;



// Esercizio 2 Login


/*
1 - creare la lista di email autorizzate
    AL CLICK DEL BOTTONE:
    2 - salvare l'email dell'utente in una variabile
    3 - creare una variabile allowed = false
    3 - creare un ciclo (i = 0; i < lista.length && allowed = false; i++)
        stampa la mail controllata
        4 - se l'email dell'utente è uguale alla mail della lista
            stampa un messaggio "email verificata"
        

*/


const emailList = ["hosaga2293@wenkuu.com", "xodaxi1314@wikfee.com" , "deneje8128@wenkuu.com", "fetino1532@wikfee.com" , "hayovak624@wikfee.com" , "fodiwed474@wikfee.com" , "yaxefi5726@watrf.com" , "tariwi2312@vkr1.com" , "loxes49954@watrf.com" , "malaf53355@watrf.com"]


const button = document.getElementById("button");
const emailInput = document.getElementById("emailinput");
const resultElement = document.getElementById("resultelement");


button.addEventListener ('click', function() {

    const input = emailInput.value.trim();

    let isUserAllowed = false;

    for (i = 0; i < emailList.length && isUserAllowed === false; i++){
        console.log(emailList[i]);
        console.log(input);
        console.log("-----------------------------------")

        

        if (input === emailList[i]){
            isUserAllowed = true;
            console.log("email trovata");

        }

    }

    if (isUserAllowed){
        button.classList.add('d-none');
        emailInput.classList.add('d-none');
        resultElement.innerText = "Benvenuto";

    }else{
        emailInput.classList.add("is-invalid");
        resultElement.innerText = "Non sei autorizzato";

    }








    
})






