console.log(module.exports === this) //true
console.log(module.exports === exports) //true

//Declarando dessas formas, deixamos o código visível para fora do arquivo
//Lembrando que aqui estamos setando de forma dinamica um elemento dentro de um objeto
this.a = 1
exports.b = 2
module.exports.c = 3


//Outro detalhe que deve-se ficar de olho é que quem de fato é passado é o module.exports
//Por isso que quando for declarar um objeto de forma literal deve-se exportar via module.exports

//não é o mais recomendado
exports = {
    nome: 'Teste'
}

//sempre que for preciso atribuir um novo obj pra ser exportado, deve-se usar o module.exports