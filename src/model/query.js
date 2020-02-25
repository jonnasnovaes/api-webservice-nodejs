var conn = require('./connection.js');

//conn.connect();

module.exports = {
    buscaCep(cep){  
        conn.query('SELECT * FROM cep WHERE codigo = ' + cep, function(error, result, fields){
            if (error) throw error;
            exports.dados = result[0];
        })
    }
}
   
