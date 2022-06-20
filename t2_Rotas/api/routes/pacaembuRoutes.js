const controllerPacaembu = require('../controllers/pacaembuControllers.js')

app.get('/pacaembu/pacaembuMenu', controllerPacaembu.menuPacaembuControllers)

app.get('/pacaembu/vilaDiCapriMenu', controllerPacaembu.menuPacaembuVilaControllers)

app.get('/pacaembu/vilaDiCapri/ProjetosModeloMenu', controllerPacaembu.menuPacaembuVilaProjetosControllers)
 