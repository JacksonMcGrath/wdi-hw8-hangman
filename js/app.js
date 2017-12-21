let words = [
	'peanuts',
	'caddyshack',
	'tommy',
	'hangman',
	'penguin'
]

function randomWord () {
	words[Math.floor(Math.random() * words.length)];
	console.log(words[Math.floor(Math.random() * words.length)]);
}

randomWord();