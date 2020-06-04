const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var botEmbed = new discord.MessageEmbed()
        .setTitle('Minecraft Creations Bot')
        .setDescription("Officiele Discord Bot")
        .setColor("#1ad969")
        .addField("Bot naam:", bot.user.username)

        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .setImage('https://i.imgur.com/wSTFkRM.png')
        .setTimestamp()
        .setFooter('Wij maken het mogelijk voor jou', 'https://i.imgur.com/wSTFkRM.png');

    // Terug sturen van het bericht
    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "info"
}