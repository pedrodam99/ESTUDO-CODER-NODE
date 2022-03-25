//fs é um móduo
const fs = require('fs')

//__dirname é o caminho atual e está presente em todos os módulos
const caminho = __dirname + '/arquivo.json'

//ler o arquivo de forma síncrona
//cuidado com arquivo muito robustos, pois trava o event loop
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//ler o arquivo de forma assíncrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.porta}`)
})

//Quando for para ler um arquivo especificamente em JSON, não precisa nem importar o FS
//Basta dar um require e passsar o formato .json

const config = require('./arquivo.json')
console.log(config.db)

//Lendo uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('.........conteudo da pasta.........')
    console.log(arquivos)
})