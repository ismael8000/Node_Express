//declarar Express
const express = require('express')

//instanciando o express
const server = express()

//método 'route' do express permite encadear várias urls numa mesma instanciação do express
server.route('/clientes')
    .get((req, res) => res.send('Lista de Clientes'))
    .post((req, res) => res.send('Novo Cliente'))
    .put((req, res) => res.send('Altera Cliente'))
    .delete((req, res) => res.send('Remove Cliente'))

//alocar uma porta para o servidor express
server.listen(3000, () => console.log("Executando..."))