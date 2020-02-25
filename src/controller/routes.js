const express   = require('express')
const app       = express()
const basicAuth = require('express-basic-auth')

const mc        = require('../functions/montaCabecalho')
const gl        = require('../functions/geraLog')
const qr        = require('../model/querys')
const dt        = require('../functions/dateTimeLog')
const server    = require('../functions/serverStatus')

const pass      = '123';    //Define a senha de autenticação do ws ( user == 'admin' )
const port      = 3434;     //Define a porta que será escutada pela aplicação

var json;                   //Variavel global responsável por receber o cabeçalho da requisição em JSON
var param;                  //Variável que recebe o valor de parâmetro da url
var rows;                   //Variável que recebe os valores retornados do banco de dados

module.exports = {

    routes() {

        //Faz a aplicação escutar a porta da requisição.
        app.listen(port);

        //Habilita a autenticação do web service (Simple Authenticate)
        app.use(basicAuth({
            users: { 'admin' : pass },
            challenge: true
        }))

        //Rota padrão da API, indica apenas o funcionamento da aplicação
        app.get('/', (req, res) => {

            json = mc.montaCabecalho(req);                  //Monta o cabeçalho JSON

            json.result.REGISTROS = {                       //Adiciona uma mensagem apenas para validar o server
                status: "Server is Running !"
            };

            res.json(json);                                 //Retorna o JSON para o usuário que requisitou

        });

        //Rota que busca TODOS os municípios do banco.
        app.get('/ws', (req, res) => {

            rows = qr.retornaAll();                         //Retorna os dados do banco
   
            json = mc.montaCabecalho(req);                  //Monta o cabeçalho JSON
            
            json.result.REGISTROS = Object.assign(rows);    //Adiciona os dados retornados do banco ao objeto REGISTROS do cabeçalho JSON

            res.json(json);                                 //Retorna o JSON para o usuário que requisitou

            
            server.status(                                  //Escreve um status no log do servidor
                        req.connection.remoteAddress + 
                        '- Realizou a busca de todos os municípios - Data: ' + dt.data() +
                        ' / Hora: ' + dt.hora(), 'mensagem'
                        );

        });

        //Rota que busca os dados do banco pelo nome do estado.
        app.get('/ws/:municipio', (req, res) => {

            param = req.params.municipio                    //Pega o parâmetro informado pelo usuário

            rows = qr.retornaEstado(param);                 //Retorna os dados do banco
   
            json = mc.montaCabecalho(req);                  //Monta o cabeçalho JSON
            
            json.result.REGISTROS = Object.assign(rows);    //Adiciona os dados retornados do banco ao objeto REGISTROS do cabeçalho JSON

            res.json(json);                                 //Retorna o JSON para o usuário que requisitou

            
            server.status(                                  //Escreve um status no log do servidor
                        req.connection.remoteAddress + 
                        '- Realizou a busca do município :' + rows[0].nome +  
                        ' - Data: ' + dt.data() +
                        ' / Hora: ' + dt.hora(), 'mensagem'
                        );

        });

    }

}