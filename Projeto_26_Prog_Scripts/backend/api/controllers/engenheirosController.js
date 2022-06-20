const models = require('../models/engenheirosModels.js')

module.exports = {
    engenheirosGetAll,
    engenheirosGetById,
    engenheirosDelete,
    engenheirosUpdate, 
    engenheirosNovo    
}

function engenheirosGetAll(req, res) {
    console.log('Listar Engenheiros { MODEL }')
    models.getAllEngenheiros(function (err, resposta) {
        console.log('Retorno de Engenheiros { M O D E L }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    }) 

}

function engenheirosGetById(req, res) {
    console.log('Consultar Engenheiros { MODEL }')
    const id = req.params.codigo
    
    models.getByIdEngenheiros(id, function (err, resposta) {
        console.log('Retorno Consulta Engenheiros { M O D E L }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    }) 
}





function engenheirosDelete(req, res) {
    const id = req.params.codigo
    console.log('Deletar Engenheiros { MODEL } '+id)
    models.deleteEngenheiros(id, function (err, resposta) {
        console.log('Retorno Delete Engenheiros { M O D E L }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    }) 
}
 
function engenheirosUpdate(req, res) {
    const id = req.params.codigo
    const dados = req.body;
    console.log('Atualização de Engenheiros { MODEL } '+id)
    console.log(dados)

    models.updateEngenheiros(id, dados, function (err, resposta) {
        console.log('Retorno Atualização de Engenheiros { M O D E L }', resposta)
        if(err) {
            throw err
        } else {
            res.json(resposta)
        }
    }) 
}

function engenheirosNovo(req, res) {
    var dados = req.body;
    console.log("Gravando Novo Registro de Engenheiros...");
    console.log(req.body);
    dados.eng_codigo = null;
    console.log("Inserindo novo registro de Engenheiros...");
    models.novoEngenheiro(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.status(200)
        res.redirect('/engenheiros');
    })
}

