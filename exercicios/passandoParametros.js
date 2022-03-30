module.exports = function(...numbers) {
    return numbers.reduce((valorTotal, valorAtual) => valorTotal += valorAtual)
}