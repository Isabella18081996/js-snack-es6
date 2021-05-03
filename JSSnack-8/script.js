/*Esercizio (map) -> si potrebbe ottimizzare con una funzione separata per il capitalize
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

$(document).ready(function(){
 $('.box-button').append(`<button>Converti le iniziali in maiuscole</button>`);

 const arrStr = [
   "topolino",
   "paperino",
   "PLUTO",
   "PiPPo",
   "minniE",
   "papErinA",
   "biancaneve",
   "CENERENTOLA",
   "auroRA"

 ];

 
for(let i=0; i < 3; i++){

  let nameRequested = prompt("Inserisci qui un nome");

 arrStr.push(nameRequested);
}

console.log(arrStr);


const arrStrCapitalize = arrStr.map((str) => {

  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
});

console.log(arrStrCapitalize);
let box = $('.box ul');
let box_1 = $('.box-1 ul');


arrStr.forEach((item) => {
  printList(item, box)
});




$('button').click(function(){
  arrStrCapitalize.forEach((item) => {
   printList(item, box_1);
  });

});


});

//funzioni

function printList (str, target,arr){
  target.append(`

    <li>${str}</li>

  `)
}