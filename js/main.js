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


function resetBoard(){

	//llop through child elements and reset

	var imacard = document.getElementsByClassName("imacard");

	for(var i =0 ; i < imacard.length ; i++){
		imacard[i].setAttribute('src','images/back.png');
	}

	cardsInPlay.pop();
	cardsInPlay.pop();

}

function createBoard(){

	for(var i =0 ; i < cards.length; i++){
		var cardElement  = document.createElement('img');
		cardElement.setAttribute('class','imacard');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener("click",flipCard);

		document.getElementById("game_board").appendChild(cardElement);
	}

}


function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
			alert("CONGRATULATIONS You found a match");
		}else{
			alert("Sorry try again");
		}

}


function flipCard(){	
    var cardId = this.getAttribute('data-id');
	//console.log("User Flipped"+ cards[cardId].rank);
	//console.log("suit = " + cards[cardId].suit);
	//console.log("image = " + cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src',cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		console.log("Two cards flipped");
		checkForMatch();
		
	}
}



createBoard();

