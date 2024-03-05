require('../index')

const Discord = require('discord.js')
const client = require('../index')

client.on("guildMemberAdd", (member) => {
    let canal_logs = "";// Coloque o ID do canal de texto
    if (!canal_logs) return;
  
    let embed = new Discord.EmbedBuilder()
    .setColor("Green")
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setTitle("👋 Boas Vindas!")
    .setDescription(`> 👨‍💻Olá ${member}!\nSeja Bem-Vindo(a) ao servidor👩‍💻 \`${member.guild.name}\`.`);
  
    member.guild.channels.cache.get(canal_logs).send({ embeds: [embed], content: `${member}` }) 
  })
  
  client.on("guildMemberRemove", (member) => {
    let canal_logs = ""; // Coloque o ID do canal de texto
    if (!canal_logs) return;
  
    let embed = new Discord.EmbedBuilder()
    .setColor("Red")
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setTitle(`Adeus ${member.user.username}....`)
    .setDescription(`> O usuário ${member} saiu do servidor!\n> 😓 Espero que retorne um dia.`);
  
    member.guild.channels.cache.get(canal_logs).send({ embeds: [embed],}) 
  })
  
  