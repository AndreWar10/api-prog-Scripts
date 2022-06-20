module.exports = {
    menuParraControllers,
}

function menuParraControllers(req, res) {
    res.render('parra/frm_parraMenu.ejs', {
        title: 'Parra',
        titulo: 'Parra Imobiliária',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        autor: 'André Guerra Santos / 5º ADS - Programação Script - Noturno'    })
}

