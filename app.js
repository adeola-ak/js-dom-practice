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
			img: "assets/download.png",
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

	const grid = document.querySelector(".grid");
	let cardsChosen = [];
	let cardsChosenId = [];

	//create board
	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			let card = document.createElement("img");
			card.setAttribute("src", "assets/brush.png");
			card.setAttribute("data-id", i);
			// card.addEventListener("click", flipcard)
			grid.appendChild(card);
		}
	}

	//check for matches
	function checkForMatch() {}

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
