document.addEventListener("DOMContentLoaded", () => {
	//card options with relative path
	const cardArray = [
		{
			name: "download",
			img: "assets/download.png",
		},
		{
			name: "download",
			img: "assets/download.png",
		},
		{
			name: "email",
			img: "assets/email.png",
		},
		{
			name: "email",
			img: "assets/email.png",
		},
		{
			name: "games",
			img: "assets/games.png",
		},
		{
			name: "games",
			img: "assets/games.png",
		},
		{
			name: "git",
			img: "assets/git.png",
		},
		{
			name: "git",
			img: "assets/git.png",
		},
		{
			name: "music",
			img: "assets/music.png",
		},
		{
			name: "music",
			img: "assets/music.png",
		},
		{
			name: "network",
			img: "assets/network.png",
		},
		{
			name: "network",
			img: "assets/network.png",
		},
	];

	cardArray.sort(() => 0.5 - Math.random());

	const grid = document.querySelector(".grid");
	const resultDisplay = document.querySelector("#result");
	let cardsChosen = [];
	let cardsChosenId = [];
	let cardsWon = [];

	//create board
	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			let card = document.createElement("img");
			card.setAttribute("src", "assets/brush.png");
			card.setAttribute("data-id", i);
			card.addEventListener("click", flipCard);
			grid.appendChild(card);
		}
	}

	//check for matches
	function checkForMatch() {
		let cards = document.querySelectorAll("img");
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];
		if (cardsChosen[0] === cardsChosen[1]) {
			alert("match found, can you do it again?");
			cards[optionOneId].setAttribute("src", "assets/blank.png");
			cards[optionTwoId].setAttribute("src", "assets/blank.png");
			cardsWon.push(cardsChosen);
		} else {
			cards[optionOneId].setAttribute("src", "assets/brush.png");
			cards[optionTwoId].setAttribute("src", "assets/brush.png");
			alert("pay a little closer attention, will ya?");
		}
		cardsChosen = [];
		cardsChosenId = [];
		resultDisplay.textContent = cardsWon.length;
		if (cardsWon.length === cardArray.length / 2) {
			resultDisplay.textContent = "Congrats. You won (this time).";
		}
	}

	//flip card
	function flipCard() {
		const cardId = this.getAttribute("data-id");
		cardsChosen.push(cardArray[cardId].name);
		cardsChosenId.push(cardId);
		this.setAttribute("src", cardArray[cardId].img);
		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500);
		}
	}

	createBoard();
});
