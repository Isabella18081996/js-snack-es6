/*Esercizio (map) -> si potrebbe ottimizzare con una funzione separata per il capitalize
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

$(document).ready(function(){

 const arrStr = [
   "topolino",
   "paperino",
   "PLUTO",
   "PiPPo",
   "minniE",
   "papErinA",
   "biancaneve",
   "CENERENTOLA",
   "auroRA",
   "aRIEL"

 ];


console.log(arrStr);



const arrStrCapitalize = arrStr.map((str) => {

  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
});

console.log(arrStrCapitalize);

});