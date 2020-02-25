//IMPORTA A FUNÇÃO DE DATA E HORA
const dateTime = require('./dateTimeLog');

//CABEÇALHO DAS REQUISIÇÕES
var json = {
    result: {
        Propriedade: "Jhonnata Novaes",
        Versão: "1.0.2",
        Data: dateTime.data(),
        Hora: dateTime.hora(),
        Ip: ''
    }
};

module.exports = {

    montaCabecalho(req){
        
        //Adiciona o IP do requerente ao cabeçalho da requisição
        json.result.Ip = req.connection.remoteAddress

        return json;
    }

}