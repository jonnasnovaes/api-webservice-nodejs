const server     = require('../functions/serverStatus')
const connection = require('./connection')

var sql;        //Variável que receberá o sql a ser executado
var rows;       //Variável que receberá os dados retornados do banco de dados

module.exports = {

    //Função que retorna os dados de acordo com o nome do estado informado
    retornaAll(){

        sql = 'SELECT * FROM municipios ORDER BY nome';

        try {
                                                                    
            rows = connection.db.query(sql);                       /* Executa a query e atribui os dados do banco
                                                                    a variável */
        } catch (error) {

            server.status(error, 'error');                          //Exibe o error no log do server
            rows.error = 'Não foi possível retornar os dados.';     //Atribui a mensagem a ser exibida no json

            return rows;
        } 

        return rows;

    },

    //Função que retorna os dados de acordo com o nome do estado informado
    retornaEstado(nome){

        sql = 'SELECT * FROM municipios WHERE nome = ' + '"' + nome + '"';

        try {
                                                                    
            rows = connection.db.query(sql);                       /* Executa a query e atribui os dados do banco
                                                                    a variável */
        } catch (error) {

            server.status(error, 'error');                          //Exibe o error no log do server
            rows.error = 'Não foi possível retornar os dados.';     //Atribui a mensagem a ser exibida no json

            return rows;
        } 

        return rows;

    }
   
}
