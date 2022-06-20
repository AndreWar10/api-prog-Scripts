module.exports = {
    menuNoticiasControllers,
    menuNoticiasEsporteControllers,
    menuNoticiasEsporteFutebolControllers
}

/*
function menuNoticiasControllers(req, res) {
    res.render('index.ejs', {
        title: 'Re-fatorando',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        titulo: 'Menu Principal',
        autor: '5º ADS - Programação Script - Matutino'
    })
}
*/

function menuNoticiasControllers(req, res) {
    res.render('noticias/frm_noticiasMenu.ejs', {
        title: 'Notícias',
        titulo: 'Notícias',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        autor: 'Hugo Maciel / 5º ADS - Programação Script - Matutino'
    })
}

function menuNoticiasEsporteControllers(req, res) {
    res.render('noticias/frm_noticiasEsporteMenu.ejs', {
        title: 'Notícias',
        titulo: 'Notícias de Esporte',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        autor: 'Hugo Maciel / 5º ADS - Programação Script - Matutino'
    })
}

function menuNoticiasEsporteFutebolControllers(req, res) {
    res.render('noticias/frm_noticiasEsporteFutebolMenu.ejs', {
        title: 'Notícias',
        titulo: 'Notícias de Futebol',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        autor: 'Hugo Maciel / 5º ADS - Programação Script - Matutino'
    })
}