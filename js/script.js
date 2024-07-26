
/* Declaration of Variables */
const cards = document.querySelectorAll(".playcard");
let isCardFlipped =false;
let board = false;
let firstCard, secondCard;

/* this function will flip cards to y by 180 deg */
function flipCard(){
    if(board) {
        return;
    }
    this.classList.add('flip');
    if(!isCardFlipped){
        isCardFlipped =  true;
        firstCard = this;
        return;
    }
    secondCard = this;
    board = true;
    isItAMatch();
}

/* Function checking if two cards are a match
 */
function isItAMatch(){
    let itsAMatch = firstCard.dataset.framework == secondCard.dataset.framework ;
    itsAMatch ? deactivateCards() : unflipCards();

}

/* function created to remove flip class and disable cards
 */
function deactivateCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

/**
 * function created to unflip the cards by removing flip class
 */
function unflipCards(){
    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}

function startGame(){
    cards.forEach(card=> card.addEventListener('click', flipCard));

}
/**
 *function created to reset the game to starting point
 */
function resetGame(){
    cards.forEach(card=>{
        card.classList.remove('flip');
        card.addEventListener('click', flipCard);
    })
resetBoard();
}

/**
 * function created to reset the board back to start when required by clicking on reset button
 */

function resetBoard(){
    [isCardFlipped, board,start] = [false, false];
    [firstCard, secondCard] = [null, null];
}

let buttonResetGame= document.getElementById("reset");
buttonResetGame.addEventListener('click', resetGame,);

let buttonStartGame = document.getElementById("start");
buttonStartGame.addEventListener('click', startGame);