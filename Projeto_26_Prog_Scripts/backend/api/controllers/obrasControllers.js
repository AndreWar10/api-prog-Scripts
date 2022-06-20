const models = require('../models/obrasModels.js')

module.exports = {
    obrasGetAll,
    obrasGetById,
    obrasDelete,
    obrasUpdate,
    obrasNovo
}

function obrasGetAll(req, res) {
    console.log('Listar Obras { MODEL }')
    models.getAllObras(function (err, resposta) {
        console.log('Retorno de Obras { M O D E L }', resposta)
        if (err) {
            throw err
        } else {
            res.json(resposta)
        }
    })

}

function obrasGetById(req, res) {
    console.log('Consultar Obras { MODEL }')
    const id = req.params.codigo
    models.getByIdObras(id, function (err, resposta) {
        console.log('Retorno Consulta Obras { M O D E L }', resposta)
        if (err) {
            throw err
        } else {
            res.json(resposta)
        }
    })
}



function obrasDelete(req, res) {
    const id = req.params.codigo
    console.log('Deletar Obras { MODEL } ' + id)
    models.deleteObras(id, function (err, resposta) {
        console.log('Retorno Delete Obras { M O D E L }', resposta)
        if (err) {
            throw err
        } else {
            res.json(resposta)
        }
    })
}

function obrasUpdate(req, res) {
    const id = req.params.codigo
    const dados = req.body;
    console.log('Atualização de Obras { MODEL } ' + id)
    console.log(dados)

    models.updateObras(id, dados, function (err, resposta) {
        console.log('Retorno Atualização de Obras { M O D E L }', resposta)
        if (err) {
            throw err
        } else {
            res.json(resposta)
        }
    })
}

function obrasNovo(req, res) {
    var dados = req.body;
    console.log("Gravando Novo Registro de Obras...");
    console.log(req.body);
    dados.obr_codigo = null;
    console.log("Inserindo novo registro de Obras...");
    models.novoObra(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.status(200)
        res.redirect('/obras');
    })
}

