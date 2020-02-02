const express = require('express');
const app = express();
const config = require('./config');


app.get('/', (req, res) => {
    res.json({status: "Server is Running !"})
});

app.get('/cabecalho', (req, res) => {

    //Adiciona o objeto REGISTROS ao cabecalho
    config.cabecalho.result.REGISTROS = {
        id: "001"
    };

    res.json(config.cabecalho);
});

//Fução que pega os parametros do http
app.get('/:id/:nome', (req, res) => {
    res.json({status: req.params})
});

app.listen(config.port);