//declarar Express
const express = require('express')

//instanciação do express.Router
//a constante router é como uma miniaplicação que contém todos os mapeamentos das urls, 
//de modo que possa ser exportada e usada por outro módulo node
const router2 = express.Router()


//aqui todas as reqs passarão por esse middleware, que calculará o tempo de execução até o next.
router2.use((req, res, next) => {
    const init = Date.now()
    next()
    console.log(`Tempo = ${Date.now() - init} ms.`)
})

//Experiência do router com route
router2.route('/caes/:id/:name')
    .get((req, res) => res.json({ id: req.params.id, name: req.params.name }))
    .post((req, res) => res.send('Novo Cão'))
    .put((req, res) => res.send('Altera Cão'))
    .delete((req, res) => res.send('Remove Cão'))

//resposta genérica caso url da requisição não esteja mapeada corretamente
router2.use((req, res) => {
    res.send('<h1>Página do Router</h1>')
})

//exportando a constante 'router' para ser usada em outro módulo do node
module.exports = router2