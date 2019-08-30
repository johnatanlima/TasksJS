function obterUsuario(callback){
    setTimeout(function(){
        return callback(null, {
            id:1,
            nome: 'johw',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            telefone:'985859164',
            ddd: '19',
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua:'dos Santos',
            numero: 55
        })
    }, 3000)
}
