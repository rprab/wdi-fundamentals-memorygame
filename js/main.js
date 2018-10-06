console.log("Up and running!");


//var cards =["queen","queen","king","king"];

var cards=[
	{rank:"queen",
	 suit:"hearts",
	 cardImage:"images/queen-of-hearts.png"
	},
	{rank:"queen",
	 suit:"diamonds",
	 cardImage:"images/queen-of-diamonds.png"
	},
	{rank:"king",
	 suit:"hearts",
	 cardImage:"images/king-of-hearts.png"
	},
	{rank:"king",
	 suit:"diamonds",
	 cardImage:"images/queen-of-diamonds.png"
	}
];

var cardsInPlay =[];

function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match");
		}else{
			alert("Sorry try again");
		}
}

function flipCard(cardId){	
/*
	var cardOne = cards[0];
	cardsInPlay.push(cardOne);
	console.log("User Flipped"+cardOne);

	var cardTwo = cards[2];
	cardsInPlay.push(cardTwo);
	console.log("User Flipped "+cardTwo);
*/

	console.log("User Flipped"+ cards[cardId].rank);
	console.log("suit = " + cards[cardId].suit);
	console.log("image = " + cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2) {

		console.log("Two cards flipped");
		checkForMatch();
		
	}
}

flipCard(0);
flipCard(1);


