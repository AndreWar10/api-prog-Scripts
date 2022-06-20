module.exports = {
    menuProjetoControllers,
}

function menuProjetoControllers(req, res) {
    res.render('projeto/frm_projetoMenu.ejs', {
        title: 'Projeto',
        titulo: 'Projeto',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        autor: 'André Guerra Santos / 5º ADS - Programação Script - Noturno'    })
}

