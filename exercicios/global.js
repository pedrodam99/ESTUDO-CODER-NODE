//Quando criado objetos no escopo global, fica disponivel em qualquer arquivo do projeto
//Assim que criamos 
global.MinhaApp = Object.freeze({
    saudacao(){
        return 'Agora eu sou GLOBAL'
    },
    nome: 'Sistema'
})
