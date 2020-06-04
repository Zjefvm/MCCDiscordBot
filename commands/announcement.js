const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // !announcement title | bericht | kleur | kanaal

    if (!message.member.hasPermission("KICK_MEMBER")) return message.reply("Je hebt geen toegang tot dit command.");

    var seperator = "|";

    if (args[0] == null) {

        var embed = new discord.MessageEmbed()
            .setTitle("Gebruik")
            .setColor("#30c223")
            .setDescription(`Maak een announcement door gebruik te maken van: \n !announcement titel ${seperator} bericht ${seperator} kleur ${seperator}`);

        return message.reply(embed);

    }

    var argsList = args.join(" ").split(seperator);

    if (argsList[2] === undefined) argsList[2] = "#39e01b";
    if (argsList[3] === undefined) argsList[3] = "mededelingen";

    var options = {

        titel: argsList[0],
        bericht: argsList[1] || "Geen inhoud meegegeven",
        kleur: argsList[2].trim(),
        kanaal: argsList[3].trim()

    }

    var announceEmbet = new discord.MessageEmbed()
        .setTitle("Announcement")
        .setColor(options.kleur)
        .setDescription(`Bericht van ${message.author} \n\n ${options.title} \n ${options.bericht}`)
        .setTimestamp();

    var channel = message.member.guild.channels.cache.find(channels => channels.name  === options.kanaal);
    if(!channel) return message.reply("Dit kanaal bestaat niet");

    channel.send(announceEmbet);

}

module.exports.help = {
    name: "announcement"
}