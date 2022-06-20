const controllerPerplan = require('../controllers/perplanControllers.js')

app.get('/perplan/perplanMenu', controllerPerplan.menuPerplanControllers)
