/* Crea 10 oggetti che rappresentano una zucchina. 
Dividi in 2 array separati le zucchine che misurano meno o più di 15 cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. */


$(document).ready(function(){


  let limit = 15;
  let sommaSmall = 0;
  let sommaLong = 0;
  let arrLong = [];
  let arrSmall = [];

  let arrZucchine = [
    {
      varietà : 'Nera di Milano',
      peso : 50,
      lunghezza : 15
    },
    {
      varietà : 'Alberello',
      peso : 25,
      lunghezza : 14
    },
    {
      varietà : 'Tonda di Nizza',
      peso : 43,
      lunghezza : 80
    },
    {
      varietà : 'Lunghe fiorentine',
      peso : 10,
      lunghezza : 18
    },
    {
      varietà : 'Trombetta dAlbenga',
      peso : 2,
      lunghezza : 10
    },
    {
      varietà : 'Zucchino giallo Golden',
      peso : 9,
      lunghezza : 21
    },
    {
      varietà : 'Zucchino romanesco',
      peso : 4,
      lunghezza : 8
    },
    {
      varietà : 'Zucchino ortolano di Faenza',
      peso : 35,
      lunghezza : 32
    },
    {
      varietà : 'Zucchino siciliano',
      peso : 50,
      lunghezza : 15
    },
    {
      varietà : 'Zucchina striata di Napoli',
      peso : 50,
      lunghezza : 15
    }
  
  
  ];

  for(let zucchina of arrZucchine){
    if(zucchina['lunghezza'] >= limit ){
      arrLong.push(zucchina)
      console.log("long");
      for(let key in zucchina){
        console.log(key + ": " + zucchina[key]);
      }
      console.log("--------------------");
      sommaLong += zucchina['peso'];
    }else{
      arrSmall.push(zucchina);
      console.log("small");
      for(let key in zucchina){
        console.log(key + ": " + zucchina[key]);
      }
      console.log("--------------------");
      sommaSmall += zucchina['peso'];
    }
    
  }
  console.log("zucchine corte: " + arrSmall.length);
  console.log("zucchine lunghe: " + arrLong.length);

  console.log("La somma del peso delle zucchine corte è: " + sommaSmall);
  console.log("La somma del peso delle zucchine lunghe è: " + sommaLong);




})