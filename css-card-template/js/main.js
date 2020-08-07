// DECLARE VARIABLES //

let deck1, deck2= []

// CACHED ELEMENT REFERENCES //

const deck1El = document.getElementById('deck1')
const deck2El = document.getElementById('deck2')
const flipBtn = document.getElementById('btn')

// ADD EVENT LISTENERS //
flipBtn.addEventListener ('click', handleClick)
// FUNCTIONS //

init()

function init() {
    deck1 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
}


// deck1 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

function handleClick(){
    if (deck1.length > 0) {
    let randIdx = Math.floor(Math.random()*deck1.length)
    let cardPicked
    cardPicked = deck1.splice(randIdx, 1) //remove a random card from deck1
    deck2.push(cardPicked[0]) //put the card in deck2
    render(cardPicked) //render what happened
    }
}

function render (cardPicked){
    if (deck2.length === 1) {  // Removes outline class when first card is picked
        deck2El.classList.remove("outline");
    }
    if (deck2.length > 1) {  // Removes previous picked card from deck 2 class list
        deck2El.classList.remove(cardToRemove);
    }
    cardToRemove = cardPicked;  // Sets card to be removed on next click
    deck2El.classList.add(cardPicked);  // Adds current card picked to deck 2 array
    if (deck2.length === 26) {  // Adjusts shadow when deck gets above/below halfway full
        deck2El.classList.add("shadow");
        deck1El.classList.remove("shadow");
    }
    if (deck1.length === 0) {  // Removes card back color and adds outline when last card is picked
        deck1El.classList.add("outline");
        deck1El.classList.remove("back-red");
    }
}