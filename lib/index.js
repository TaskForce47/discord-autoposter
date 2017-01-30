var Discord = require("discord.js");
var client = new Discord.Client();
const config = require("../config.json");

client.login(config.token);

client.on("ready", () => {
  console.log("I am ready!");
});

module.exports = client;
