const rt = require('./src/controller/routes')
const server = require('./src/functions/serverStatus')


//Limpa a CLI e exibe a mensagem no log que o servidor foi iniciado
server.status('', 'clear');
server.status('', 'clear');
server.status('Server is Running !', 'start');

//Chama as rotas de resposta da API
rt.routes();