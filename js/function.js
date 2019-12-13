var currentScore, globalScore, activePlayer, dice ;
var lastDice;

globalScore = [0, 0];
activePlayer = 0;
currentScore = 0;

newGame();

function newGame(){
globalScore = [0, 0];
document.querySelector('.p0-title').classList.remove('active');
document.querySelector('.p1-title').classList.remove('active');
document.querySelector('.p0-title').classList.add('active');
document.querySelector('.dice-sum-0').textContent = '0';
document.querySelector('.dice-sum-1').textContent = '0';
document.querySelector('.gscore-0').textContent = '0';
document.querySelector('.gscore-1').textContent = '0';
document.querySelector('.roll').classList.remove('dis');
document.querySelector('.hold').classList.remove('dis');
document.querySelector('.p0-title').textContent = 'Player 1';
document.querySelector('.p1-title').textContent = 'Player 2';
}


function diceRoll(){
dice = Math.floor(Math.random() * 6) + 1;
document.querySelector('img').src = '/img/dice-' + dice + '.png';
currentScore += dice;
document.querySelector('.dice-sum-' + activePlayer).textContent = currentScore;
console.log(dice);

if (dice === 6 && lastDice === 6 ){
    globalScore[activePlayer] = 0;
    document.querySelector('.gscore-' + activePlayer).textContent = globalScore[activePlayer];
    nextPlayer();
}
else if (dice == 1){
    nextPlayer();
}
lastDice = dice;
}

function nextPlayer() {
    document.querySelector('.dice-sum-' + activePlayer).textContent = 0;
    currentScore = 0;
    document.querySelector('.p' + activePlayer + '-title').classList.toggle('active');
    activePlayer = activePlayer == 1 ? activePlayer = 0 : activePlayer = 1;
    document.querySelector('.p' + activePlayer + '-title').classList.toggle('active');
}

function addScore(){
   //adding to global score
    globalScore[activePlayer] += currentScore;
    document.querySelector('.gscore-' + activePlayer).textContent = globalScore[activePlayer];
    //anouncint the winner.
    var input = document.querySelector('.winScore').value ;
    
    if (input){
        winScore = input;
    }
    else { winScore = 100}
    
    console.log(winScore);

    if (globalScore[activePlayer] >= winScore) {
        console.log('winner!');
     document.querySelector('.p' + activePlayer + '-title').textContent = 'Winner!!!';
     document.querySelector('.roll').classList.add('dis');
     document.querySelector('.hold').classList.add('dis');
    }
    else {
        nextPlayer();
    }
}




document.querySelector('.roll').addEventListener('click', diceRoll );
document.querySelector('.hold').addEventListener('click', addScore );
document.querySelector('.btn-new-game').addEventListener('click', newGame );

