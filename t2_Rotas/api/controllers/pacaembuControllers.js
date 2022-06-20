module.exports = {
    menuPacaembuControllers,
    menuPacaembuVilaControllers,
    menuPacaembuVilaProjetosControllers
}

function menuPacaembuControllers(req, res) {
    res.render('pacaembu/frm_pacaembuMenu.ejs', {
        title: 'Pacaembu',
        titulo: 'Pacaembu',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        autor: 'André Guerra Santos / 5º ADS - Programação Script - Noturno'    })
}

function menuPacaembuVilaControllers(req, res) {
    res.render('pacaembu/frm_pacaembuVilaMenu.ejs', {
        title: 'Pacaembu',
        titulo: 'Vila de Capri',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        autor: 'André Guerra Santos / 5º ADS - Programação Script - Noturno'    })
}

function menuPacaembuVilaProjetosControllers(req, res) {
    res.render('pacaembu/frm_pacaembuVilaProjetosMenu.ejs', {
        title: 'Pacaembu',
        titulo: 'Projetos Modelo',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        autor: 'André Guerra Santos / 5º ADS - Programação Script - Noturno'    })
}