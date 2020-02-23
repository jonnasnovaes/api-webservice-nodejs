const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const config = require('./config');
const query = require('./model/connection.js');
var server = require('./functions/serverStatus');
var cabecalhoJson = require('./functions/montaCabecalho');
var fun = require('./functions/functions');

//Limpa a CLI e exibe a mensagem no log que o servidor foi iniciado
server.status('', 'clear');
server.status('Server is Running !', 'start');

//Variavel global responsável por receber o cabeçalho da requisição em JSON
var json;

app.get('/', (req, res) => {

    json = cabecalhoJson.montaCabecalho(req);
    
    //Adiciona o Status do server
    json.result.REGISTROS = {
        status: "Server is Running !"
    };

    //função que gera o log
    fs.writeFile(path.resolve('logs/') + '\\' + fun.nomeLog() + '.txt', JSON.stringify(json), 
        function(erro){

            if(erro){
                server.status('Não foi possível gravar o arquivo de log','error');
            }
            else{
                server.status('Log gerado com sucesso', 'mensagem');
            }

    });

    res.json(json);

});

//Fução que pega os parametros do http e busca no banco de dados
app.get('ws/:cep', (req, res) => {

    let cepHttp = req.params.cep
    let infoCep;

    infoCep = query.buscaCep(cepHttp);

    json = cabecalhoJson.montaCabecalho(req);   

    json.result.REGISTROS = { infoCep };

    res.json(json);
});

app.listen(config.port);