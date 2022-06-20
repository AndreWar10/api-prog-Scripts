const controllerMrv = require('../controllers/mrvControllers.js')

app.get('/mrv/mrvMenu', controllerMrv.menuMrvControllers)
