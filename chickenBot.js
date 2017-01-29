var Botkit = require('botkit');

// Bot tells random joke
function getResponse() {
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

var controller = Botkit.slackbot({
	debug: false
});

var bot = controller.spawn({
	token: process.env.BOT_API_KEY || require('./token')
}).startRTM();


// Bot listens for user asking 'why did the chicken cross the road.' Responds by telling joke.
controller.hears(['why did the chicken cross the road'], 'direct_message, direct_mention, mention', function(bot, message) {
	bot.reply(message, getResponse());
});

// Bot listens for user saying hi or mentioning 'chicken-bot.' Responds with chicken emoji.
controller.hears(['hi', 'hello', 'howdy'], 'direct_message, direct_mention, mention', function(bot, message) {
	bot.reply(message, ':chicken:');
});