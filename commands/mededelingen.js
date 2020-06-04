const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je hebt geen toestemming");
    
    let embed = new discord.MessageEmbed()
    .setTitle("Annoucement")
    .setDescription(`Bericht van  ${message.author}\n\n${args.join(" ")}`)
    .setColor(0x30c223)
    .setTimestamp();
    if(!args.join(" ")) return;
    message.delete();
    return message.channel.send({embed: embed});

}
module.exports.help = {
    name: "mededeling"

}