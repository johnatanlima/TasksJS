function obterUsuario(callback){
    setTimeout(function(){
        return callback(null, {
            id:1,
            nome: 'johw',
            dataNascimento: new Date()
        })
    }, 1000)
}

