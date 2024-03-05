require('../index')
const Discord = require('discord.js')
const client = require('../index')

client.on("guildMemberAdd", (member) => {
    let cargo_autorole = member.guild.roles.cache.get("")//<-ID do cargo de autorole
    if (!cargo_autorole) return console.log("❌ Não está configurado.")
  
    member.roles.add(cargo_autorole.id).catch(err => {
      console.log(`❌ Não foi possível adicionar o cargo de autorole no usuário ${member.user.tag}.`)
    })
  })