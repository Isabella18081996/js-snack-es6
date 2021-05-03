/*Esercizio (array, oggetti, filter)
Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe. Es: 
[
	{ nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
	{ nome: ‘cane’, ’famiglia: ‘canidi’, classe: ‘mammiferi’ },
	{ nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
]
Crea un nuovo array con la lista dei mammiferi.*/

$(document).ready(function(){

 const arrAnimals = [
   {
     nome: 'leone',
     famiglia: 'felidi',
     classe:'mammiferi'
   },
   {
    nome: 'cane',
    famiglia: 'canidii',
    classe:'mammiferi'
  },
  {
    nome: 'gallina',
    famiglia: 'fasianidi',
    classe:'uccelli'
  },
  {
    nome: 'llucertola',
    famiglia: 'reptilianus',
    classe:'rettili'
  },
  {
    nome: 'gatto',
    famiglia: 'felidi',
    classe:'mammiferi'
  }
 ];

 console.log(arrAnimals);

 const arrMammiferi = arrAnimals.filter((animal) => animal.classe === 'mammiferi');

 console.log(arrMammiferi);

});