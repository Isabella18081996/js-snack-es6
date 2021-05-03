/* Crea un array composto da 10 oggetti che rappresentano un’automobile.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: inserisci nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */
$(document).ready(function(){
 
  const arrCars = [
    {
      marca:'fiat',
      modello:'punto',
      alimentazione:'diesel'
    },
    {
      marca:'Seat',
      modello:'Ibiza',
      alimentazione:'benzina'
    },
    {
      marca:'alfa romeo',
      modello:'giulietta',
      alimentazione:'diesel'
    },
    {
      marca:'alfa romeo',
      modello:'giulia',
      alimentazione:'benzina'
    },
    {
      marca:'mercedes',
      modello:'AMG',
      alimentazione:'diesel'
    },
    {
      marca:'mercedes',
      modello:'classe A',
      alimentazione:'benzina'
    },
    {
      marca:'tesla',
      modello:'model x',
      alimentazione:'elettrico'
    },
    {
      marca:'audi',
      modello:'I3',
      alimentazione:'elettrico'
    },
    {
      marca:'fiat',
      modello:'fiorino',
      alimentazione:'metano'
    },
    {
      marca:'fiat',
      modello:'multipla',
      alimentazione:'gpl'
    },
  ];

  let benzinaCars = [];
  let dieselCars = [];
  let ecologicCars = [];
  arrCars.forEach((car) => {
   if(car.alimentazione === 'benzina'){
     benzinaCars.push(car);
   }else if (car.alimentazione === 'diesel'){
     dieselCars.push(car);
   }else{
     ecologicCars.push(car);
   }
  });
  console.log(benzinaCars);
  console.log(dieselCars);
  console.log(ecologicCars);
})