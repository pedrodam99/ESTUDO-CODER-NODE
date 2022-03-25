//Algumas comparações
console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

//Dentro de uma função o this aponta para global
function logThis () {
    console.log('......dentro da função......')
    console.log(this === module.exports)
    console.log(this === exports)

    console.log(this === global)
}

logThis()
console.log(global)