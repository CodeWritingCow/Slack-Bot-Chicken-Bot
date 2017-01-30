var Botkit = require('botkit'),
	chickenJokes = require('./data/chickenJokes');

var controller = Botkit.slackbot({
	debug: false
});

var bot = controller.spawn({
	token: process.env.BOT_API_KEY || require('./token'),
	send_via_rtm: true // This is required to make bot.replyWithTyping() work
}).startRTM();


// Bot listens for user asking 'why did the chicken cross the road.' Responds by telling joke.
controller.hears(['why did the chicken cross the road'], 'direct_message,direct_mention,mention', function(bot, message) {
	bot.replyWithTyping(message, chickenJokes.getResponse());
});

// Bot listens for user saying hi or mentioning 'chicken-bot.' Responds with chicken emoji.
controller.hears(['hi', 'hello', 'howdy'], 'direct_message,direct_mention,mention', function(bot, message) {
	bot.replyWithTyping(message, ':chicken:');
});