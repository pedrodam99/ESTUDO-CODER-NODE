//Podemos usar uma factory para burlar isso, já que a factory retorna uma nova instância
module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}