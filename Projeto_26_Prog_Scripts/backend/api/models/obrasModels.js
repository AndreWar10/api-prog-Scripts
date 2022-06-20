const conexao = require('../../config/conexao.js')

module.exports = {
    getAllObras,
    getByIdObras,
    deleteObras,
    updateObras,
    novoObra
}

function getAllObras(callback) {
    conexao.query('select obr.* ,eng_nome,eng_telefone,eng_crea from obr inner join eng on eng.eng_codigo = obr.eng_codigo;', callback)
}

function getByIdObras(id, callback) {
    conexao.query('select obr.* ,eng_nome,eng_telefone,eng_crea from obr inner join eng on eng.eng_codigo = obr.eng_codigo where obr_codigo =' + id, callback)
}

function deleteObras(id, callback) {
    conexao.query('delete from obr where obr_codigo = ' + id, callback)
}

function updateObras(id, dados, callback) {


    const p_sql = "update obr set obr_cidade = '" + dados.obr_cidade +
        "', obr_tipo = '" + dados.obr_tipo +
        "', obr_valor = '" + dados.obr_valor +
        "', obr_inicioobra = '" + dados.obr_inicioobra +
        "', eng_codigo = '" + dados.eng_codigo +

        "' where obr_codigo = '" + id + "'";

    console.log("Atualizando Obras/Update \n" + p_sql);

    conexao.query(p_sql, callback)

}

function novoObra(dados, callback) {
    var msql = 'INSERT INTO obr SET ?';
    conexao.query(msql, dados, callback);
}

