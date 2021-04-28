/* 1
Creare una squadra di basket e per ogni giocatore generare casualmente le statistiche di gioco, secondo queste regole:
il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
la media punti fatti per partita deve essere compresa tra 0 e 50
la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100 */
$(document).ready(function(){

  let numberTeam = parseInt(prompt('quanti giocatori vuoi vedere'));
  let arrTeam = [];
  const strPlayer = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  


  //funzioni
  const playerTeam = (target,player,averagePointsPlayer,averageOfThreePointsPlayer) => {
     target.push({
       codice : player,
       averagePoints : averagePointsPlayer,
       averageOfThreePoints : averageOfThreePointsPlayer,
     })
  };

  const generatorRandomNumber = (min,max) => {
    return Math.floor(Math.random()*(max - min + 1) + min)
  };
  
  const generatorRandomStr = (str,numberText) => {
    let content ="";
    for ( let i = 0; i < numberText; i++ ){
      content += str.charAt(Math.floor(Math.random() * str.length));
    }
    return content 
  };

  let namePlayer;

  while(arrTeam.length < numberTeam){
    namePlayer = (generatorRandomStr(strPlayer,3) + generatorRandomNumber(100,999));
    let pointPlayer = generatorRandomNumber(0,50);
    let pointThreePlayer = generatorRandomNumber(0,100);
    playerTeam(arrTeam,namePlayer,pointPlayer,pointThreePlayer);
  }
  console.log(arrTeam);
  console.log(namePlayer);



});