var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = []; 
var cardOne = cards[3];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if(cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
// if there are two cardsInPlay and they're the same 
alert("You found a match!");
// say "match"
}
else {
	alert("Sorry, try again.");
// else say "pick again"
// and reset deck	
}




