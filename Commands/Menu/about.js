const Discord = require('discord.js');
const { prefix, author, authorID, github, LockGuildID, PermittedGuilds, AllowGuilds, founder, founderId, sourceCode, SupportServer } = require('../settings.json');

module.exports = {
    name: "about",
    description: "about command",

    async run(client, message, args) {
        const AllowedGuildIDs = PermittedGuilds.find((g) => g === `${message.guild.id}`)
        if (AllowGuilds === false) {
            if (message.guild.id !== LockGuildID) {
                const Unauth = new Discord.MessageEmbed()
                    .setDescription(`Unauthorised command usage.`)
                    .setColor(0x36393E);

                const Leaving = new Discord.MessageEmbed()
                    .setDescription(`Leaving Guild...`)
                    .setColor(0x36393E);

                setTimeout(function () {
                    message.channel.send(Unauth).then(msg => {
                        msg.delete({ timeout: 2000 })
                    })
                }, 500)
                setTimeout(function () {
                    message.channel.send(Leaving).then(msg => {
                        msg.delete({ timeout: 1000 })
                    })
                }, 4000)
                setTimeout(function () {
                    message.guild.leave();
                }, 6000)
            } else {
                const userCount = client.guilds.cache.map((guild) => guild.memberCount).reduce((p, c) => p + c);
                const about = new Discord.MessageEmbed()
                    .setTitle(`${client.user.username} | About`)
                    .setDescription(`\n\n**Founder**\n\`Discord:\` \<@${founderId}>\n \`Support Server:\` [Click Here](${SupportServer}) \n \n **Stats**\n \`Users:\` \`${userCount}\` \n \`Servers:\` \`${client.guilds.cache.size}\`   \n \n **Bot Description** \n \`Latency:\` \`${Date.now() - message.createdTimestamp}ms\` \n \`Language:\` \`JavaScript, Batch\` \n \`System:\` \`Linux\``)
                    .setThumbnail(`${client.user.avatarURL({ dynamic: true })}`)
                    .setFooter(`Spoke Anti-Nuke | Prefix: ${prefix}`)
                    .setColor(0x36393E)
                    .setTimestamp(Date.now());
                message.channel.send(about).catch(() => {
                    console.error(red(`[COMMAND FAILED] : [GUILD] ${message.guild.name} | [CHANNEL] ${message.channel.name} | [REASON] MISSING PERMISSIONS`));
                });
            }
        } else {
            if (message.guild.id !== AllowedGuildIDs) {
                const Unauth = new Discord.MessageEmbed()
                    .setDescription(`Unauthorised command usage.`)
                    .setColor(0x36393E);

                const Leaving = new Discord.MessageEmbed()
                    .setDescription(`Leaving Guild...`)
                    .setColor(0x36393E);

                setTimeout(function () {
                    message.channel.send(Unauth).then(msg => {
                        msg.delete({ timeout: 2000 })
                    })
                }, 500)
                setTimeout(function () {
                    message.channel.send(Leaving).then(msg => {
                        msg.delete({ timeout: 1000 })
                    })
                }, 4000)
                setTimeout(function () {
                    message.guild.leave();
                }, 6000)
            } else {
                const userCount = client.guilds.cache.map((guild) => guild.memberCount).reduce((p, c) => p + c);
                const about = new Discord.MessageEmbed()
                    .setTitle(`${client.user.username} | About`)
                    .setDescription(`\n\n**Founder**\n\`Discord:\` \<@${founderId}>\n \`Support Server:\` [Click Here](${SupportServer}) \n \n **Stats**\n \`Users:\` \`${userCount}\` \n \`Servers:\` \`${client.guilds.cache.size}\`   \n \n **Bot Description** \n \`Latency:\` \`${Date.now() - message.createdTimestamp}ms\` \n \`Language:\` \`JavaScript, Batch\` \n \`System:\` \`Linux\``)
                    .setThumbnail(`${client.user.avatarURL({ dynamic: true })}`)
                    .setFooter(`Spoke Anti-Nuke | Prefix: ${prefix}`)
                    .setColor(0x36393E)
                    .setTimestamp(Date.now());
                message.channel.send(about).catch(() => {
                    console.error(red(`[COMMAND FAILED] : [GUILD] ${message.guild.name} | [CHANNEL] ${message.channel.name} | [REASON] MISSING PERMISSIONS`));
                });
            }
        }

    }
}