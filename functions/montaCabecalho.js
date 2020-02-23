//IMPORTA A FUNÇÃO DE DATA E HORA
const dateTime = require('../functions/functions');

//CABEÇALHO DAS REQUISIÇÕES
var json = {
    result: {
        Propriedade: "Jhonnata Novaes",
        Versão: "1.0.0",
        Data: dateTime.data(),
        Hora: dateTime.hora(),
        Ip: ''
    }
};

module.exports = {

    montaCabecalho(req){
        
        json.result.Ip = req.connection.remoteAddress

        return json;
    }

}