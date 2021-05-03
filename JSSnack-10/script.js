/* Esercizio (array, oggetti, map, interpolazione delle stringhe)
Crea un array di oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un’età.
Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
Es:
[
	{ nome: ‘Mario’, cognome: ‘Rossi’, eta: 60 },
	{ nome: ‘Luigi’, cognome: ‘Verdi’, eta: 12 },
	{ nome: ‘Silvia’, cognome: ‘Neri’, eta: 25 },
]
[
	‘Mario Rossi può guidare’,
	‘Luigi Verdi non può guidare’,
	‘Silvia Neri può guidare’,
]*/

$(document).ready(function(){

 const arrPeople = [
   {
     name: 'Mario',
     surname: 'Rossi',
     age:60
   },
   {
    name: 'Lucia',
    surname: 'Albini',
    age:12
  },
  {
    name: 'Isabella',
    surname: 'Nita',
    age: 24
  },
  {
    name: 'Anna',
    surname: 'Fessas',
    age:17
  },
  {
    name: 'Matteo',
    surname: 'Bedo',
    age:25
  },
  {
    name: 'AnnaMAria',
    surname: 'Chiodi',
    age:45
  },

 ];


 const arrAdults = arrPeople.map((person) => {

   let str = '';

  if(person.age >= 18){
    str = (person.name + " " + person.surname + " può guidare la macchina");
  }
  else{
    str = (person.name + " " + person.surname + " non può guidare la macchina");
  };

  return str
 });

 console.log(arrAdults);


});