const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1259.99,
    desconto: 0.15
}

//Aqui transformamos o objeto pro formato textual json
//E dessa forma geramos o arquivo
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), (err => {
    console.log(err || 'Arquivo Salvo')
}))