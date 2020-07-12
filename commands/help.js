const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

  try{

    var text = "**Zjef Youtube Bot** \n\n **__Commands__** \n !info - Geeft informatie \n !idee - Plaats een idee in het ideeën channel! (niet werkend) \n !regels - Bekijk de server regels. \n !report - Raporteer een speler voor ongepast gedrag. \n !serverinfo - Geeft informatie over de server \n !hallo - Krijg een vriendelijke hallo terug!\n\n **__Staff Commands__**\n !ban - Verban iemand van de server (niet werkend) \n !kick - Kick iemand van de server (niet werkend)\n !clear <Hoeveelheid> - Clear een stuk van de chat! \n !warn - Waarschuw een speler \n!mededeling - Maak een mededeling.(niet werkend)";

    message.author.send(text);

    message.reply("Je hebt een priveberichtje gekregen met de commands.")

  }catch(error){
      message.reply("Er is iets fout gelopen");


  }


}

module.exports.help = {
    name: "help"
}