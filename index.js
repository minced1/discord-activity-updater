// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILD] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
    // Set the client user's presence
    client.user.setPresence({ activities: [{ name: 'with discord.js' }], status: 'idle' });
});



// Login to Discord with your client's token
client.login(token);
