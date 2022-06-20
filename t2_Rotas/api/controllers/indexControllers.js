module.exports = {
    index
}

function index(req, res) {
    res.render('index.ejs', {
        title: 'Início',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        titulo: 'Empreendimento Imobiliário',
        autor: 'André Guerra Santos / 5º ADS - Programação Script - Noturno'
    })

}

   