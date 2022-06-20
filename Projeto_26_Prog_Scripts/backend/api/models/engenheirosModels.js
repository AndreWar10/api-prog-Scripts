const conexao = require('../../config/conexao.js')

module.exports = {
    getAllEngenheiros,
    getByIdEngenheiros,
    deleteEngenheiros,    
    updateEngenheiros, 
    novoEngenheiro
}

function getAllEngenheiros(callback){
    conexao.query('select * from eng', callback)
}

function getByIdEngenheiros(id, callback){
    conexao.query('select * from eng where eng_codigo = ' + id, callback)
}

function deleteEngenheiros(id, callback){
    conexao.query('delete from eng where eng_codigo = ' + id, callback)
}

function updateEngenheiros(id, dados, callback){

   
    const p_sql = "update eng set eng_nome = '" + dados.eng_nome + 
        "', eng_apelido = '"      + dados.eng_apelido +
        "', eng_telefone = '"     + dados.eng_telefone +
        "', eng_crea = '"         + dados.eng_crea +
        "', eng_dtformatura = '"  + dados.eng_dtformatura +
        
        "' where eng_codigo = '" + id + "'";

    console.log("Atualizando Engenheiros/Update \n" + p_sql);

    conexao.query(p_sql, callback)

}

function novoEngenheiro(dados, callback) {
    var msql = 'INSERT INTO eng SET ?';
    conexao.query(msql, dados, callback);
}

