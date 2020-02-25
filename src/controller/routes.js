const express = require('express')
const app = express()

const mc = require('../functions/montaCabecalho')
const gl = require('../functions/geraLog')

//Define a porta que será escutada pela aplicação
const port = 3434;

//Variavel global responsável por receber o cabeçalho da requisição em JSON
var json;

module.exports = {

    routes() {

        //Faz a aplicação escutar a porta da requisição.
        app.listen(port);

        //Rota padrão da API, indica apenas o funcionamento da aplicação
        app.get('/', (req, res) => {

            json = mc.montaCabecalho(req);

            //Adiciona o Status do server
            json.result.REGISTROS = {
                status: "Server is Running !"
            };

            //Gera o log da aplicação
            //gl.geraLog(json);

            //Retorna a resposta da requisição
            res.json(json);

        });

        //Fução que pega os parametros do http e busca no banco de dados
        app.get('ws/:cep', (req, res) => {

            let cepHttp = req.params.cep
            let infoCep;

            infoCep = query.buscaCep(cepHttp);

            json = mc.montaCabecalho(req);

            json.result.REGISTROS = {
                infoCep
            };

            res.json(json);
        });

    }

}