const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");
 
const client = new discord.Client();
client.commands = new discord.Collection();

fs.readdir("./commands/" , (err, files) => {

if(err) console.log(err);

var jsFiles = files.filter(f => f.split(".").pop() === "js");

if(jsFiles.length <= 0) {
    console.log("Geen files gevonden");
    return;
}

jsFiles.forEach((f,i) => {

    var fileGet = require(`./commands/${f}`)
    console.log(`De file ${f} is geladen.`)

    client.commands.set(fileGet.help.name , fileGet);

    })  

});


client.login(botConfig.token);
 
client.on("ready", async () => {
 
    console.log(`${client.user.username} is online.`);
 
    client.user.setActivity("Zoekt errors & maakt zich zelf", { type: "PLAYING" });
 
});
 
client.on("guildMemberAdd", member =>{

var role = member.guild.roles.cache.get('717655670232449054');

if(!role) return;

member.roles.add(role);

var channel = member.guild.channels.cache.get('717645393965613116')

if(!channel) return;

channel.send(`Welkom op de **Minecraft Creations** server ${member}`);

})

 
client.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;

    if(!message.content.startsWith(prefix)) return;
 
    const args = message.content.slice(prefix.length).split(' '); // Haal de prefix er vanaf en stop elk woord in een array (gesplits met een " ")
    const command = args.shift().toLowerCase(); // Pak de eerste entry uit de array van argumenten die er zo uit ziet: ["<command>", "argument1", "argument2"]
    const commands = client.commands.get(command);
    if (commands) commands.run(client, message, args)

//     if (command === `${prefix}hallo`) {
//         return message.channel.send("Hallo!!");
//    }
 
//    if (command === `${prefix}info`) {
//     // Embed wat we gaan laten tonen.
//     var botEmbed = new discord.MessageEmbed()
//         .setTitle('Minecraft Creations Bot')
//         .setDescription("Officiele Discord Bot")
//         .setColor("#1ad969")
//         .addField("Bot naam:", client.user.username)

//         .setThumbnail('https://i.imgur.com/wSTFkRM.png')
//         .setImage('https://i.imgur.com/wSTFkRM.png')
//         .setTimestamp()
//         .setFooter('Wij maken het mogelijk voor jou', 'https://i.imgur.com/wSTFkRM.png');

//     // Terug sturen van het bericht
//     return message.channel.send(botEmbed);
// }

// .addFields(
//     {name:"Bot naam",value: bot.user.username},
//     {name:"Bot naam",value: bot.user.username}
// )

// if (command === `${prefix}serverinfo`) {

//     var serverEmbed = new discord.MessageEmbed()
//         .setDescription("Serverinfo")
//         .setColor("#1ad969")
//         .addField("Je bent deze server gejoind op", message.member.joinedAt)
//         .addField("Totaal members", message.guild.memberCount);

//     return message.channel.send(serverEmbed);
// }
});

client.login(process.env.token);