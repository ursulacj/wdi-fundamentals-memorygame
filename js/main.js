var cards = [
	{
	rank: "queen", 
	suit: "hearts", 
	cardImage: "images/queen-of-hearts.png"
    },
	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png" 
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},
	{
	rank:  "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
    }
];

var cardsInPlay = [];

var createBoard = function () {
	for(var i = 0; i < cards.length; i += 1) {
		var cardElement = document.createElement('img');
			cardElement.setAttribute('src',"images/back.png");
			cardElement.setAttribute('data-id', i);
			document.querySelector('#game-board').appendChild(cardElement);
			cardElement.addEventListener('click', flipCard);
		}
};

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} 
	else {
		alert("Sorry, try again.");
	}
    };

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
		if(cardsInPlay.length === 1) {
			//this is based around the idea that you have to have one flipped already to get two to match 
		   console.log("User flipped " + cards[cardId].rank);
		      console.log(cards[cardId].cardImage);
		      console.log("flipped card suit: " + cards[cardId].suit);
		    cardsInPlay.push(cards[cardId].rank);
		    checkForMatch();
		}
		else { 
		  console.log("User flipped " + cards[cardId].rank);
		        console.log(cards[cardId].cardImage);
		        console.log("flipped card suit: " + cards[cardId].suit);
		  cardsInPlay.push(cards[cardId].rank);
		}
};

createBoard();