// USERNAME

let username = prompt("Please enter a username");

while (username.length > 10) {
	alert(
		`Oh no you entered too many characters,\nPlease enter a username less than 10 characters`
	);
	username = prompt("Please enter a username");
}

username = username[0].toUpperCase() + username.substring(1).toLowerCase();

// PLAYER MOVE

function getPlayerMove() {
	return prompt("Please enter your rock, paper or scissors move").toLowerCase();
}

// COMPUTER MOVE

let computerMoveOptions = ["rock", "paper", "scissors"];

function getRandomInteger() {
	return Math.floor(Math.random() * computerMoveOptions.length);
}

// LOGIC & FUNCTIONS

function getWinner(playerMove, computerMove) {
	if (playerMove === computerMove) {
		return 0;
	} else if (
		(playerMove === "paper" && computerMove === "rock") ||
		(playerMove === "rock" && computerMove === "scissors") ||
		(playerMove === "scissors" && computerMove === "paper")
	) {
		return 1;
	} else if (
		(playerMove === "rock" && computerMove === "paper") ||
		(playerMove === "scissors" && computerMove === "rock") ||
		(playerMove === "paper" && computerMove === "scissors")
	) {
		return -1;
	}
}

function resultMessage(result) {
	if (result === 0) {
		return `${username}, it's a draw!`;
	} else if (result === 1) {
		return `${username}, you win!`;
	} else if (result === -1) {
		return `${username}, you lose!`;
	}
}

let gamesPlayed = 0;
let win = 0;
let loss = 0;
let draw = 0;

// GAME LOOP

do {
	let playerMove = getPlayerMove();
	let computerMove = computerMoveOptions[getRandomInteger()];
	let result = getWinner(playerMove, computerMove);
	switch (result) {
		case 0:
			draw++;
			break;
		case 1:
			win++;
			break;
		case -1:
			loss++;
			break;
	}
	let winLossDraw = `   Games won: ${win}\n   Games lost: ${loss}\n   Games drawn: ${draw}`;
	let currentScore = win - loss;
	let message = resultMessage(result);
	// console.log(playerMove, computerMove, result, message, win, loss, draw);
	gamesPlayed++;
	if (gamesPlayed === 1) {
		alert(
			`${message}\nResult: ${result}\nCurrent Score: ${currentScore}\nOne game played\n${winLossDraw}`
		);
	} else {
		alert(
			`${message}\nResult: ${result}\nCurrent Score: ${currentScore}\n${gamesPlayed} games played\n${winLossDraw}`
		);
	}
} while (confirm("Click OK to continue playing"));
