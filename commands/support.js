const Config = require('../config.json')
const data = require('../tickets.json')
exports.use = async (client, message, nothing, args, command) => {
    const Discord = require('discord.js')
    const fs = require('fs')

    if (args[0]) {
        message.channel.send(new Discord.RichEmbed().setColor(Config.ticketcolor).setDescription('Je ticket is gemaakt!!\nEr zal zo snel mogelijk een stafflid naar je ticket kijken!').setTimestamp().setAuthor('Tickets'))
        message.guild.createChannel(`ticket-${data.id}`).then(async c => {
            let reason = args.join(" ");
            if (message.guild.channels.find(c => c.name.toLowerCase() === '-= tickets =-')) {
                if (message.guild.channels.find(c => c.name.toLowerCase() === '-= tickets =-').type === 'category') {
                    c.setParent(message.guild.channels.find(c => c.name.toLowerCase() === '-= tickets =-').id)
                } else {
                    c.setParent(message.guild.channels.find(c => c.name.toLowerCase() === '-= tickets =-').id)
                }
                c.overwritePermissions(message.guild.defaultRole, {
                    VIEW_CHANNEL: false
                })
                c.overwritePermissions(message.member, {
                    VIEW_CHANNEL: true
                })
                c.overwritePermissions(message.guild.roles.find(r => r.name.toLowerCase() === 'eigenaar'), {
                    VIEW_CHANNEL: true
                })
                c.overwritePermissions(message.guild.roles.find(r => r.name.toLowerCase() === 'moderator'), {
                    VIEW_CHANNEL: true
                })
                message.delete();

            }
            await c.send(new Discord.RichEmbed().addField('Subject', `${reason}`).addField('Uitleg', "Leg goed uit wat er aan de hand is, om een snellere reactie te krijgen!").setDescription(`Bedankt voor het maken van het ticket!.\nDe staffleden zulllen je zo snel mogelijk helpen!`).setColor(Config.ticketcolor))
        })
        data.id++;
        fs.writeFile('./tickets.json', '{\n"id":' + data.id + "\n}", (err) => {
            if (!err) return;
            console.error(err)
        })

    }
}