const controllers = require('../controllers/engenheirosController.js')

server.get('/engenheiros', controllers.engenheirosGetAll)

server.get('/engenheiros/:codigo', controllers.engenheirosGetById)

server.delete('/engenheiros/:codigo', controllers.engenheirosDelete)

server.put('/engenheiros/:codigo', controllers.engenheirosUpdate)

server.post('/engenheiros', controllers.engenheirosNovo)


