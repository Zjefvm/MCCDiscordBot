const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var botEmbed = new discord.MessageEmbed()
        .setTitle('Zjef Youtube Bot')
        .setDescription("Officiele Discord Bot")
        .setColor("#1ad969")
        .addField("Bot naam:", bot.user.username)

        .setThumbnail('https://imgur.com/GOk0A8o')
        .setImage('https://imgur.com/GOk0A8o')
        .setTimestamp()
        .setFooter('Ben jij al geabonneerd?', 'https://imgur.com/GOk0A8o');

    // Terug sturen van het bericht
    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "info"
}