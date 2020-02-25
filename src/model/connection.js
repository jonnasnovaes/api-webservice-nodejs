const mysql = require('sync-mysql');

var db = new mysql({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_municipios_api'
});

exports.db = db;