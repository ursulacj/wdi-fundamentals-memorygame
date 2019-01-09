var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
};

var flipCard = function(cardId) {
if(cardsInPlay.length === 1) {
	checkForMatch();
console.log("User flipped " + cards[cardId]); 
cardsInPlay.push(cards[cardId]);
}
else 
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
};

flipCard(2);
console.log(cardsInPlay.length);
flipCard(1);
/* based on your tests, you'll probably have to change the 
length to 1 so it shows that you just flipped the second*/


