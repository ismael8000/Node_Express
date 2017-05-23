//declarar Express
const express = require('express')

//instanciação do express.Router
//a constante router é como uma miniaplicação que contém todos os mapeamentos das urls, 
//de modo que possa ser exportada e usada por outro módulo node
const router = express.Router()


//aqui todas as reqs passarão por esse middleware, que calculará o tempo de execução até o next.
router.use((req, res, next) => {
    const init = Date.now()
    next()
    console.log(`Tempo = ${Date.now() - init} ms.`)
})

// o ':id' significa que essa parte da url é variável, pois é parte onde será informado o id
router.get('/produtos/:id', (req, res) => {
    //envia um response em formato json
    res.json({ id: req.params.id, name: 'Caneta' })
})

//exemplo usando dois parâmetros da requisição
router.get('/clientes/:id/:name', (req, res, next) => {
    res.json({ id: req.params.id, name: req.params.name })
})

router.post('/produtos', (req, res, next) => {
    res.send('<h1>Novo cliente</h1>')
})

router.use((req, res, next) => {
    res.send('<h1>Página do Router</h1>')
})


//exportando a constante 'router' para ser usada em outro módulo do node
module.exports = router