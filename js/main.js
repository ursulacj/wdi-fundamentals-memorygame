var cards = [
	{
	rank: "queen", 
	suit: "hearts", 
	cardImage: "images/images/queen-of-hearts.png"
    },
	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/images/queen-of-diamonds.png" 
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/images/king-of-hearts.png"
	},
	{
	rank:  "king",
	suit: "diamonds",
	cardImage: "images/images/king-of-diamonds.png"
    }
];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} 
	else {
		alert("Sorry, try again.");
	}
    };

var flipCard = function(cardId) {
if(cardsInPlay.length === 1) {
	//this is based around the idea that you have to have one flipped already to get two to match 
  //you might have to change this to accomodate the return function to reset the cards
  console.log("ready to match!");
   console.log("User flipped " + cards[cardId].rank);
      console.log(cards[cardId].cardImage);
      console.log("flipped card suit: " + cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
    console.log("all flipped cards: " + cardsInPlay);
    //comment the above line out when you're sure that everything works
    checkForMatch();
}
else { 
console.log("only one card flipped. flip one more!");
  console.log("User flipped " + cards[cardId].rank);
        console.log(cards[cardId].cardImage);
        console.log("flipped card suit: " + cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);
  console.log("all flipped cards: " + cardsInPlay);
  //comment the above line out when you're sure that everything works
}
};

flipCard(0);
flipCard(2);





