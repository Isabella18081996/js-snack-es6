$(document).ready(function(){

  let arrZucchine = [
    {
      varietà : 'Nera di Milano',
      peso : 50,
      lunghezza : "15cm"
    },
    {
      varietà : 'Alberello',
      peso : 25,
      lunghezza : "14cm"
    },
    {
      varietà : 'Tonda di Nizza',
      peso : 43,
      lunghezza : "80cm"
    },
    {
      varietà : 'Lunghe fiorentine',
      peso : 10,
      lunghezza : "18cm"
    },
    {
      varietà : 'Trombetta dAlbenga',
      peso : 2,
      lunghezza : "10cm"
    },
    {
      varietà : 'Zucchino giallo Golden',
      peso : 9,
      lunghezza : "21cm"
    },
    {
      varietà : 'Zucchino romanesco',
      peso : 4,
      lunghezza : "8cm"
    },
    {
      varietà : 'Zucchino ortolano di Faenza',
      peso : 35,
      lunghezza : "32cm"
    },
    {
      varietà : 'Zucchino siciliano',
      peso : 50,
      lunghezza : "15cm"
    },
    {
      varietà : 'Zucchina striata di Napoli',
      peso : 10,
      lunghezza : "15cm"
    }
  
  
  ]

  let pesoTotale = 0;

  for(let zucchina of arrZucchine){
    console.log( zucchina['peso']);
    pesoTotale += zucchina['peso'];

  }
  
    console.log('il peso totale delle zucchine è: ' + pesoTotale.toFixed(2));



});