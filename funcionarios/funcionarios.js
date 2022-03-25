const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const findWomen = funcionario => funcionario.genero === 'F'
const findChinese = funcionario => funcionario.pais === 'China'
const menorSalario = (func, funcAtual) =>  func.salario < funcAtual.salario ? func : funcAtual

axios.get(url).then((response => {
    const funcionarios = response.data
    const func = funcionarios.filter(findWomen).filter(findChinese).reduce(menorSalario)
    console.log(func)
}))