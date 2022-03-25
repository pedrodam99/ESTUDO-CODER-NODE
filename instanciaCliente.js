const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) //retorna 3 3, pois A e B apontam pro mesmo obj

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // retorna 1 3, pois C e D são instâncias diferentes