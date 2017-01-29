var Discord = require("discord.js");
var client = new Discord.Client();
const config = require('./config.json');

client.on("message", msg => {
    if (msg.content.startsWith("ping")) {
        msg.channel.sendMessage("pong!");
    }
});

client.on('ready', () => {
  console.log('I am ready!');
});

client.login(config.token);