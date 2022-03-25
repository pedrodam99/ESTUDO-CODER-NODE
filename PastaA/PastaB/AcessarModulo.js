//nesse exemplo saimos de dois diretorios (melhor forma)
let moduloA1 = require('../../moduloa')
console.log(moduloA1.ola)
//Acessando pelo caminho absoluto (pior forma)
let moduloA2 = require("C:/Users/USUARIO/Curso WEB MODERNO - CODER/Node/moduloA.js")
console.log(moduloA2.ola)

//Quando o modulo está dentro do node_modules, não precisamos passar o caminho relativo
    // const http = require('http')
    // http.createServer((req, res) => {
    //     res.write('Bom Dia!')
    //     res.end()
    // }).listen(8080)