//IMPORTA A FUNÇÃO DE DATA E HORA
const dateTime = require('./functions/functions');

//PORTA DE ESCUTA DAS REQUISIÇÕES
const port = 3030;

//CABEÇALHO DAS REQUISIÇÕES
var cabecalho = {
    result: {
        Propriedade: "Jhonnata Novaes",
        Versão: "1.0.0",
        Data: dateTime.data(),
        Hora: dateTime.hora()
    }
};

//EXPORTA AS VARIÁVEIS PARA O ARQUIVO QUE ESTIVER IMPORTANDO
exports.port = port;
exports.cabecalho = cabecalho;