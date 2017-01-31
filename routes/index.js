var express = require("express");
var router = express.Router({
  mergeParams: true
});
var Discord = require("discord.js");
var client = require ("../lib/index");
const config = require("../config.json");

/* GET home page. */
router.post("/api", function(req, res) {
  console.log (req.body);
  let RichEmbed = new Discord.RichEmbed();
  RichEmbed.setAuthor("Buddy","https://phumberdroz.github.io/psychic-octo-rotary-everything/main-menu.png");
  RichEmbed.setColor("#31e097");
  RichEmbed.setDescription("**Field1:** asdf \n **Field2:** asdf2 \n @meat");
  RichEmbed.setFooter("Test Footer");
  client.channels.get(config.channel).sendEmbed(RichEmbed,"").catch(err =>console.log (err.response.error));
  res.json({success: true});
});

module.exports = router;
