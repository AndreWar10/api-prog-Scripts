module.exports = {
    index
}

function index(req, res) {
    res.render('index.ejs', {
        title: 'Início',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        titulo: 'Menu Principal',
        autor: 'André Guerra / 5º ADS - Programação Script - Noturno'
    })

}

   