module.exports = {
    menuMrvControllers,
}

function menuMrvControllers(req, res) {
    res.render('mrv/frm_mrvMenu.ejs', {
        title: 'MRV',
        titulo: 'MRV',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        autor: 'André Guerra Santos / 5º ADS - Programação Script - Noturno'    })
}
