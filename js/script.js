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

if (playerNumber > cpuNumber){
    console.log("ha vinto il giocatore");

} else if (cpuNumber > playerNumber){
    console.log("ha vinto il computer");

} else{
    console.log('pareggio')
}






