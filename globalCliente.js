//só é preciso fazer isso uma vez
require('./global')

console.log(MinhaApp.saudacao())

//O problema é que dessa forma fica passivel de mudança
//Mas podemos dar um freeze nele para isso nao acontecer
MinhaApp.nome = 'Mudei o nome'
console.log(MinhaApp.nome)