console.log("Up and running!");


var cards =["queen","queen","king","king"];
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

	console.log("User Flipped"+ cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2) {

		console.log("Two cards flipped");
		checkForMatch();
		
	}
}

flipCard(0);
flipCard(1);


