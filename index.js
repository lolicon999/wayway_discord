/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'NDczNTIzNDMzMzE0MTg5MzEz.DkDTaw.RdeJTRCqtJ5JXzj4t9g5CHm4Lo0';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
  else if (message.content.match(/摸摸/)){
	message.channel.send("蹭蹭"+message.author);
  }
  
  
});



// Log our bot in
client.login(token);