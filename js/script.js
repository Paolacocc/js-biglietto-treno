//INPUT
// chiedere il numero dei km
const kmNumber = parseInt(prompt("Quanti km devi percorrere?"));
//chiedere l'eta
const userAge = parseInt(prompt("quanti anni hai?"));
console.log(kmNumber, userAge);
//LOGICA
// calcolare il prezzo del biglietto
const ticketPrice = (kmNumber * 0.21).toFixed(2);
console.log(ticketPrice);
//applicare uno sconto del 20% per minorenni e del 40% per gli over 65

//discout per i minorenni
const youngDiscount = ticketPrice * 0.2;
console.log(youngDiscount);
const discountUnderAge = (ticketPrice - youngDiscount).toFixed(2);
console.log(discountUnderAge);

//discount per pensionati
const elderlyDiscount = ticketPrice * 0.4;
const discountRetirees = (ticketPrice - elderlyDiscount).toFixed(2);
console.log(discountRetirees);


// applicare la consizione nei diversi casi
let finalPrice = "";

if (userAge <= 18 ){
    finalPrice = discountUnderAge;
} else if (userAge >= 65){
    finalPrice = discountRetirees;
} else {
    finalPrice = ticketPrice
}
console.log(finalPrice);

//OUTPUT
//stampare il prezzo finale del biglietto con massimo due decimali

document.getElementById('ticket').innerHTML = finalPrice;