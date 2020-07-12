const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

  try{

    var text = "**Zjef Youtube Bot** \n\n **__Regels__** \n 1. Niet schelden \n2. Geen zelf promotie (buiten in de promotie channel) \n3. Geen spam \n4. Geen NSFW content \n5. Niet onnodig taggen \n6. Altijd luisteren naar de staffleden";

    message.author.send(text);

    message.reply("Je hebt een priveberichtje gekregen met de regels.")

  }catch(error){
      message.reply("Er is iets fout gelopen");


  }


}

module.exports.help = {
    name: "regels"
}