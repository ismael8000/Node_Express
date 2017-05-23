//declarar Express
const express = require('express')

//instanciando o express
const server = express()




//alocar uma porta para o servidor express
server.listen(3000, () => console.log("Executando..."))