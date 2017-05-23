//declarar Express
const express = require('express')

//instanciando o express
const server = express()

//associando um middleware à raiz da aplicação
server.get('/', function(req, res) {
    res.send('<h1>  Index!!!</h1>')
})

//outras formas de mapear urls
server.all('/teste', function(req, res) {
    res.send('<h1> Teste!! </h1>')
})

//mapeando urls com expressão regular--> aceita pedaços do nome
server.all(/api/, function(req, res) {
    res.send('<h1> API!! </h1>')
})


//alocar uma porta para o servidor express

server.listen(3000, () => console.log("Executando..."))