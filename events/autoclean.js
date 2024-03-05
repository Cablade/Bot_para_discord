require('../index')
const Discord = require('discord.js')
const client = require('../index')

client.on('ready', () => {
    let limpezaRealizada = false;

  setInterval(() => {
    const agora = new Date();
    const horaAtual = agora.getHours();

    if (horaAtual >= 0 && horaAtual < 5 && !limpezaRealizada) { //Entre 00h e 5 da manha
      // ID do canal que deseja limpar
      const canalID = ''; 
      const canal = client.channels.cache.get(canalID);

      canal.messages.fetch({ limit: 50 }) // Limite de mensagens para analisar
        .then(messages => {
          messages.forEach(message => {
            if (!message.pinned) { 
              message.delete()
                .catch(error => console.log(`Erro ao excluir mensagem: ${error}`));
            }
          });
        })
        .catch(console.error);

      limpezaRealizada = true;
    } else if (horaAtual >= 5) {
      limpezaRealizada = false;
	}
  }, 600000); // 10 minutos
});