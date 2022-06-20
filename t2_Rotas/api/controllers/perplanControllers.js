module.exports = {
    menuPerplanControllers,
}

function menuPerplanControllers(req, res) {
    res.render('perplan/frm_perplanMenu.ejs', {
        title: 'Perplan',
        titulo: 'Perplan',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        autor: 'André Guerra Santos / 5º ADS - Programação Script - Noturno'    })
}
