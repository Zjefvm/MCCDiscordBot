const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    const categoryId = "744097841462640731";

    var userName = message.author.username;
    var userDiscriminator = message.author.Discriminator;

    var bool = false

    message.cache.forEach((channel) => {

        if(channels.name == userName.toLowerCase() + "-" + userDiscriminator){

            message.channel.send("Je hebt al een ticket gemaakt, je mag maximaal 1 ticket hebben.");

            bool = true;

        }

    
    });

    if(bool == true) return;

    var embedCreateTicket = newdiscord.RichEmbed()
        .setTitle(message.author.username +"Je ticket word aangemaakt!")


        message.channel.send(embedCreateTicket);
}

module.exports.help = {
    name: "ticket"
}