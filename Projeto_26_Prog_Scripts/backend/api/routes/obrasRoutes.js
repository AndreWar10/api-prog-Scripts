const controllers = require('../controllers/obrasControllers.js')

server.get('/obras', controllers.obrasGetAll)

server.get('/obras/:codigo', controllers.obrasGetById)

server.delete('/obras/:codigo', controllers.obrasDelete)

server.put('/obras/:codigo', controllers.obrasUpdate)

server.post('/obras', controllers.obrasNovo)


