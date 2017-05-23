//declarar Express
const express = require('express')

//instanciando o express
const server = express()

//middleware é uma função acessível via http, é uma API
//middleware 1
//o método 'use' além de permitir qualquer verbo http, também define um prefixo para uma url

server.use('/api', function(req, res, next) {
    console.log('Inicio...')
        //o next faz parte do conceito Chain of Responsability, logo ele manda ir para o middleware seguinte, 
        //no entanto, ele não chama uma função/middleware qualquer, mas somente um que seja da mesma instânciação do express
    next()
    console.log('Fim....')
})

//middleware 2
//o 'use' também pode ser usado para definir uma url raiz/default por onde todas as requisições passarão
server.use(function(req, res) {
    console.log('Resposta...')
    res.send('<h1>Api!!</h1>')
})




//alocar uma porta para o servidor express
server.listen(3000, () => console.log("Executando..."))