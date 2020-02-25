var mysql = require('mysql');
var server = require('../functions/serverStatus');

var query = '';
var json = {};

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ceps'
});

function connect() {
    
    conn.connect( (err) =>{
    
        if(err){
            
            server.status('Erro to connecting to database..', 'error');
            //console.log('\n' + cli.red('') + '\n');
            return;
        }
    
        server.status('Connection is established with database !', 'success');
        
    });
}

function desconect(){

    conn.end( (err) =>{
    
        if(err){
            
            console.log(cli.red('Erro to finish connection..'));
            return;
        }
        console.log(cli.yellow('The connection with database was finish.'));
    });
}


module.exports = {

    buscaCep(cep){

        query = 'SELECT * FROM cep WHERE codigo = ' + cep;

        connect();
        
        conn.query(query, function(error, result, fields){
            if (error) throw error;


            result.forEach(row => {
                json.id = `${row.id}`;
                json.cep = `${row.codigo}`;   
            });

            server.status('Rotina de acesso ao dados de cep executada.', 'mensagem');

        });

        return json;

    }
   
}


 