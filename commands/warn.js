const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async(bot, message, args) =>{

    // !warn spelerNaam redenen hier

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Jij hebt geen toestemming voor de command.");

    if (!args[0]) return message.reply("Geen gebruiker opgegeven.");
 
    if (!args[1]) return message.reply("Gelieve een redenen op te geven.");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");

    var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    var reason = args.slice(1).join(" ");

    if (!warnUser) return message.reply("Kan de gebruiker niet vinden.")

    if(warnUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Deze persoon kan je niet warnen");

    if(!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0
    
    }

    warns[warnUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) =>{
        if (err) console.log(err);
    });

    var embed = new discord.MessageEmbed()
    .setColor("#30c223")
    .setFooter(message.member.displayName, message.author.displayAvatarURL)
    .setTimestamp()
    .setDescription(`** Gewarned:** ${warnUser} (${warnUser.id})
    **Warning door:** ${message.author}
    **Redenen: ** ${reason}`)
    .addField("Aantal warns", warns[warnUser.id].warns);


var channel = message.member.guild.channels.cache.get("731823296194281523");

if(!channel) return;

channel.send(embed);

if(warns[warnUser.id].warns == 3) {

    var embed = new discord.MessageEmbed()
    .setColor("#30c223")
    .setDescription("Let op!")
    .addField("Bericht", "Je hebt nog 2 waarschuwingen nodig voor een kick!");

    message.channel.send(embed);


    }else if(warns[warnUser.id].warns == 5){
        message.guild.member(warnUser).kick(reason);
    message.channel.send(`${warnUser} is gekicked door de bot wegens te veel warns.`);
    }

}

module.exports.help = {
    name: "warn"
}