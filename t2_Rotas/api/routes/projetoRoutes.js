const controllerProjeto = require('../controllers/projetoControllers.js')

app.get('/projeto/projetoMenu', controllerProjeto.menuProjetoControllers)
