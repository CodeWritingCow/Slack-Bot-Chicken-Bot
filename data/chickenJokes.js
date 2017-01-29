// Bot tells random joke
module.exports = {
	getResponse: function() {
		var jokes = [
		'There was a car coming.',
		'To get to the other side.',
		'To get the newspaper.',
		'Because it wanted to find out what those jokes were about.',
		'To boldly go where no chicken has gone before!',
		'Because the light was green.',
		'I could tell you, but then the Chicken Mafia would kill me.'
		];
		return jokes[Math.floor(Math.random() * jokes.length)];
	}
};
