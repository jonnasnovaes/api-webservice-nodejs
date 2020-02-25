const fs = require('fs')
const path = require('path')
const nl = require('./dateTimeLog')
const server = require('./serverStatus')

module.exports = {

    geraLog(json) {

         //função que gera o log de erro
         fs.writeFile(path.resolve('logs/') + '\\' + nl.nomeLog() + '.txt', JSON.stringify(json),
         function (erro) {

             if (erro) {
                 server.status('Não foi possível gravar o arquivo de log', 'error');
             } else {
                 server.status('Log gerado com sucesso', 'mensagem');
             }

         });

    }

}