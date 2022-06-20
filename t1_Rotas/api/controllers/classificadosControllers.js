module.exports = {
    menuClassificadosControllers,
    menuClassificadosAutomovelControllers,
    menuClassificadosAutomovelVolkswagenControllers,
    menuClassificadosAutomovelVolkswagenGolControllers,
    menuClassificadosAutomovelVolkswagenFuscaControllers,
    menuClassificadosAutomovelVolkswagenBrasiliaControllers

}

function menuClassificadosControllers(req, res) {
    res.render('classificados/frm_classificadosMenu.ejs', {
        title: 'Notícias',
        titulo: 'Classificados',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        autor: 'André Guerra / 5º ADS - Programação Script - Matutino'
    })
}

function menuClassificadosAutomovelControllers(req, res) {
    res.render('classificados/frm_classificadosAutomovelMenu.ejs', {
        title: 'Notícias',
        titulo: 'Automóveis',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        autor: 'André Guerra / 5º ADS - Programação Script - Matutino'
    })
}

function menuClassificadosAutomovelVolkswagenControllers(req, res) {
    res.render('classificados/frm_classificadosAutomovelVolkswagenMenu.ejs', {
        title: 'Notícias',
        titulo: 'Volkswagen',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        autor: 'André Guerra / 5º ADS - Programação Script - Matutino'
    })
}

function menuClassificadosAutomovelVolkswagenGolControllers(req, res) {
    res.render('classificados/frm_classificadosAutomovelVolkswagenGolMenu.ejs', {
        title: 'Notícias',
        titulo: 'Gol',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        autor: 'André Guerra / 5º ADS - Programação Script - Matutino'
    })
}

function menuClassificadosAutomovelVolkswagenFuscaControllers(req, res) {
    res.render('classificados/frm_classificadosAutomovelVolkswagenFuscaMenu.ejs', {
        title: 'Notícias',
        titulo: 'Fusca',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        autor: '5º ADS - Programação Script - Matutino'
    })
}

function menuClassificadosAutomovelVolkswagenBrasiliaControllers(req, res) {
    res.render('classificados/frm_classificadosAutomovelVolkswagenBrasiliaMenu.ejs', {
        title: 'Notícias',
        titulo: 'Brasilia',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        autor: '5º ADS - Programação Script - Matutino'
    })
}