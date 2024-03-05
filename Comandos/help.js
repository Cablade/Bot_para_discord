const Discord = require("discord.js")

module.exports = {
  name: "help",
  description: "Painel de comandos do bot.", 
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let embed_painel = new Discord.EmbedBuilder()
    .setColor("Aqua")
    .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynmiac: true }) })
    .setDescription(`Olá ${interaction.user}, veja meus comandos interagindo com o painel abaixo:`);

    let embed_utilidade = new Discord.EmbedBuilder()
    .setColor("Aqua")
    .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynmiac: true }) })
    .setDescription(`Olá ${interaction.user}, veja meus comandos de **utilidade** abaixo:`)
    .setTitle("Comandos de Utilidade e Diversão")
    .addFields(
        { name: "/sugerir", value: "Sugerir algo ao servidor" },
        { name: "/serverinfo", value: "Fornece informações sobre o servidor." },
        { name: "/help", value: "Painel de comandos do bot." },
        { name: "/say", value: "Fazer o bot falar algo." },
        { name: "/botinfo", value: "Fornece informações sobre o bot." },
        { name: "/ping", value: "Mostrar o ping do servidor" },
		{ name: "/roleta,", value: "Faz uma roleta russa com timemute de 5 minutos"}
    );

    let embed_adm = new Discord.EmbedBuilder()
    .setColor("Aqua")
    .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynmiac: true }) })
    .setDescription(`Olá ${interaction.user}, veja meus comandos de **administração** abaixo:`)
    .setTitle("Comandos de Administração")
    .addFields(
        { name: "/clear", value: "Limpar mensagens" },
        { name: "/setstatus", value: "Alterar o status do bot" },
        { name: "/tempmute", value: "Retira a permissão do usuário interagir no servidor por um tempo determinado." },
        { name: "/lock", value: "Trancar um canal" },
        { name: "/unlock", value: "Destrancar um canal" },
        { name: "/enquete", value: "Criar uma enquete" },
        { name: "/anunciar", value: "Criar um anúncio" },
        { name: "/unban", value: "Desbanir um usuário" },
        { name: "/kick", value: "Expulsar um usuário" },
        { name: "/ban", value: "Banir um usuário" }
    );

    let painel = new Discord.ActionRowBuilder().addComponents(
        new Discord.SelectMenuBuilder()
            .setCustomId("painel_help")
            .setPlaceholder("Clique aqui!")
            .addOptions(
                {
                    label: "Painel Inicial",
                    emoji: "💻",
                    value: "painel"
                },
                {
                    label: "Utilidade",
                    description: "Veja meus comandos de utilidade.",
                    emoji: "🗃",
                    value: "utilidade"
                },
                {
                    label: "Administração",
                    description: "Veja meus comandos de administração.",
                    emoji: "🔨",
                    value: "adm"
                }
            )
    )

    interaction.reply({ embeds: [embed_painel], components: [painel], ephemeral: true }).then( () => {
        interaction.channel.createMessageComponentCollector().on("collect", async (c) => {
            let valor = c.values[0];
            try {
                await c.deferUpdate();
            } catch (error) {
                console.error("Erro ao deferir a atualização: ", error);
                return;
            }
            if (valor === "painel") {
                interaction.editReply({ embeds: [embed_painel] })
            } else if (valor === "utilidade") {
                interaction.editReply({ embeds: [embed_utilidade] })
            } else if (valor === "adm") {
                interaction.editReply({ embeds: [embed_adm] })
            }
        })
    })
  }
}