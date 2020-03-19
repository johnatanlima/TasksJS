const { obterPessoas } = require('./service') //Se eu coloco apos a variavel const uma declaracao entre {} signica que do modulo service que estou importanto, eu quero apenas a funcao que informo antre os {}

/*
    const item = {
        nome = "johnatan", 
        idade  = 26,
    }

const { nome, idade} = item
console.log(nome, idade)

*/
// Nova implementação de um array ... criando um fitro personalizado
Array.prototype.meuFilter = function(callback){
    const lista = []
    for(index in this){
        const item = this[index]
        const result = callback(item, index, this)

        if(!result) continue;
        lista.push(item)
    }
}


async function main(){
    try {
        const { results } = await obterPessoas(`a`)

       // const familiaLars = results.filter(function(item){
            //por padrao precisa retornar um boleano
            //para informar se deve manter ou remover da lista
            //false -> remove da lista
            //true => mantem 
            //nao encontrou = -1
            //encontrou = posicao index
            //const result = item.name.toLowerCase().indexOf(`lars`) !== -1
            
           // return result
       // })
       const familiaLars = results.meuFilter((item, index, lista) => { 
                console.log(`index : ${index}`, lista.length)
                return item.name.toLowerCase().indexOf('lars') !== -1
            })
            
        const names = familiaLars.map((pessoa) => pessoa.name)
        console.log(names)
    
    } catch (error) {
        console.error(`deu ruim...`, error)
    }
}

main()