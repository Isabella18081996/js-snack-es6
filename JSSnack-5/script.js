/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b” */

$(document).ready(function(){

  const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let min = parseInt(prompt('Inserisci un numero compreso fra 0 e '+ (alfabeto.length-2)));
  let max = parseInt(prompt('Inserisci un numero compreso fra '+(min + 1) +' e '+(alfabeto.length-1)));


  //FUNZIONI

  const filterArray = (arr, min, max) => {
    let arrReturn = [];

    for(let i in alfabeto){
      if(i >= min && i<= max){
        arrReturn.push(arr[i]);
      }
    }

    return arrReturn;
  }

console.log(filterArray(alfabeto,min,max))

});