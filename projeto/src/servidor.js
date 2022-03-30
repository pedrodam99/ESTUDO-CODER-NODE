const porta = 3003

const express = require('express')
const app = express()


app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', preco: 1223.99}) //send() converte para JSON
})


app.listen(porta, () => {
    console.log(`Servidor está funcionando na porta ${porta}`)
})