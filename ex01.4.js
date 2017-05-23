//declarar Express
const express = require('express')

//instanciando o express
const server = express()

const router = require('./ex01.4_router')

const routerr = require('./ex01.4_router2')

//aqui eu mando a aplicação rodar o middleware router a partir da url '/api'
server.use('/api', router)

server.use('/apii', routerr)

//mapeando uma url genérica/raiz (sem prefixo)
server.use((req, res) => {
    res.send('<h2>Página Inicial</h2>')
})

//alocar uma porta para o servidor express
const port = 3000
server.listen(port, () => console.log(`Executando backend na porta ${port}`))