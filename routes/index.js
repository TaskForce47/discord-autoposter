var express = require("express");
var router = express.Router({
  mergeParams: true
});
var Discord = require("discord.js");
var client = require ("../lib/index");
const config = require("../config.json");
var storage = require("node-persist");
storage.initSync();
/* GET home page. */
router.post("/message", function(req, res) {
  console.log ("=== request ===");
  console.log (req.body);
  console.log ("=== request end ===");

  if ( !(storage.getItemSync(req.body.execution.id)) ) {
    let RichEmbed = new Discord.RichEmbed();
    RichEmbed.setAuthor("Buddy","https://phumberdroz.github.io/psychic-octo-rotary-everything/main-menu.png");

    RichEmbed.setDescription(req.body.execution.action_executions.map(e => {
      const str = "**" + e.action.name + ":** " + e.status;
      return str;
    }));
    RichEmbed.setFooter("Running time: " + (Date.parse(req.body.execution.finish_date) - Date.parse(req.body.execution.start_date) )/1000 + " sec" +"\n" + req.body.exection.pipeline.target_site_url);
    RichEmbed.addField("Commit:", req.body.execution.from_revision.message);
    RichEmbed.setTitle(req.body.project.display_name + " " + req.body.execution.pipeline.name);
    switch (req.body.execution.status) {
    case "FAILED":
      RichEmbed.setColor("#f43251");
      break;
    case "SUCCESSFUL":
      RichEmbed.setColor("#00bc00");
      break;
    default:
      RichEmbed.setColor("#ffb721");
    }
    client.channels.get(config.channel).sendEmbed(RichEmbed,"");
    // .then(msg => {
    //   storage.setItemSync(req.body.execution.id, msg.id);
    //   console.log("posted status");
    // }).catch(err => {
    //   console.log (err.response.error);
    // });
    res.json({success: true});
  }


});

module.exports = router;
