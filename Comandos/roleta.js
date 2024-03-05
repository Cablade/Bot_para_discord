const ms = require('ms'); // Certifique-se de instalar este pacote com 'npm install ms'
const Discord = require('discord.js');

module.exports = {
    name: 'roleta-russa',
    description: 'Jogue a roleta russa e arrisque ser silenciado por 5 minutos!',
    type: Discord.ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {

        const muteRole = interaction.guild.roles.cache.find(role => role.name === 'Muted');
        if (!muteRole) {
            return interaction.reply('Não foi possível encontrar um cargo de mute neste servidor.');
        }

        const members = Array.from(interaction.guild.members.cache.filter(member => !member.user.bot).values());

        const random = Math.random();

        if (random < 0.1) {
            return interaction.reply('A roleta russa foi girada, mas ninguém foi silenciado desta vez!');
        }

        const member = members[Math.floor(Math.random() * members.length)];

        member.roles.add(muteRole);

        setTimeout(() => {
            member.roles.remove(muteRole);
        }, ms('5m'));

        return interaction.reply(`A roleta russa foi aplicada e ${member.user.tag} foi silenciado por 5 minutos!`);
    },
};