//declarar Express
const express = require('express')

//instanciando o express
const server = express()
    //outra instância do express
const server2 = express()

//middleware 1
server.get('/', function(req, res, next) {
    console.log('Inicio...')
        //o next faz parte do conceito Chain of Responsability, logo ele manda ir para o middleware seguinte, 
        //no entanto, ele não chama uma função/middleware qualquer, mas somente um que seja da mesma instânciação do express
    next()
    console.log('Fim....')
})

//middleware 2
server2.get('/', function(req, res, next) {
    console.log('Resposta...')
    res.send('<h1>Olá, eu sou o Express!!</h1>')
    next()
})

//middleware 3
server.get('/', function(req, res, next) {
    console.log('middleware 3...')
        //res.send('<h1>Olá, eu sou o middleware 3!</h1>')
    next()
})

const teste = function() {
    console.log('função vazia')
}
teste()


//alocar uma porta para o servidor express
server.listen(3000, () => console.log("Executando..."))