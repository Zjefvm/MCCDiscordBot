const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var serverEmbed = new discord.MessageEmbed()
        .setDescription("Serverinfo")
        .setColor("#1ad969")
        .addField("Je bent deze server gejoind op", message.member.joinedAt)
        .addField("Totaal members", message.guild.memberCount);

    return message.channel.send(serverEmbed);
}

module.exports.help = {
    name: "serverinfo"
}