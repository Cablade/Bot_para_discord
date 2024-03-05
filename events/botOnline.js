require('../index')
const Discord = require('discord.js')
const client = require('../index')

// Evento que é ativado quando o bot está online no painel de controle
client.on('ready', () => {
    console.log(`🔥 Estou online em ${client.user.username}!`)
})
