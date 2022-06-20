const mysql = require('mysql2')
const database = 'dados221n'

const conexao = mysql.createConnection({
    user: 'root',
    password: 'admin',
    host: 'localhost',
    port: 3306
})

conexao.connect((err) => {
    if (err) {
        console.log('Deu pau ao conectar no MySQL')
        return
    }

    conexao.query('USE ' + database)
    console.log('\nConexão MySQL ta OK!')
})

module.exports = conexao;

