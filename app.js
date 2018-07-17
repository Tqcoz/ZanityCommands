const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');

client.on('ready',() => {
	console.log('I\'m Online\nI\'m Online');
});

var prefix = "/"
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
		message.channel.sendMessage('```md\nI< Ping >```');
	}
	
	 if (message.content.startsWith(prefix + 'pong')) {
	             message.channel.sendMessage('ping');
	}
});

client.login(settings.token);
