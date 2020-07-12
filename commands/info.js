const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var botEmbed = new discord.MessageEmbed()
        .setTitle('Zjef Youtube Bot')
        .setDescription("Officiele Discord Bot")
        .setColor("#1ad969")
        .addField("Bot naam:", bot.user.username)

        .setThumbnail('https://gyazo.com/b54a8eaa6e4bbb8977a885ec2f399e32')
        .setImage('https://gyazo.com/b54a8eaa6e4bbb8977a885ec2f399e32')
        .setTimestamp()
        .setFooter('Ben jij al geabonneerd?', 'https://gyazo.com/b54a8eaa6e4bbb8977a885ec2f399e32');

    // Terug sturen van het bericht
    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "info"
}