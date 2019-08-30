"use strict"

function obterUsuario(){
    //Se der algo inesperado => reject(ERRO pra ele)
    //Se passar e for success => resolve()
    return new Promisse(function resolvePromisse(resolve, reject)
    {
        setTimeout(function(){
            return resolve({
                id: 1,
                nome: 'johw',
                dataNascimento: new Date()
            })
        }, 1000)
    })
    
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

//Criando uma variavel obj que vai receber os dados do objeto trazido pela funcao
const usuarioPromisse = obterUsuario()
    //obterUser é uma funcao que retorna uma Promisse, e a promisse retorna 2 resultados que ela tratou lá
    //Para tratar os dados da promisse se for sucesso, usamos o .then
    //Para tratar os dados da promisse se for um erro, usamos o .catch
usuarioPromisse().resolvePromisse()
    .then(function(resultado){ //essa function aqui passa uma callback, pra chamar um resultado que é o log
        console.log('Resultado... ', resultado) 
    })
    .catch(function(error){
        console.error('Deu ruim, vey... ', error)
    })






