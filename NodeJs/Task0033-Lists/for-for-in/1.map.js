const service = require('./service')

Array.prototype.meuMap = function(callback){
    const novoArrayMapeado = []
    for (let indice = 1; indice <= this.length - 1; indice++){
        const resultado = callback(this[indice], indice)
        novoArrayMapeado.push(resultado)
    }

    return novoArrayMapeado;
}

async function main(){
    try {
        const results = await service.obterPessoas(`a`)
        //const names = []

        // results.results.forEach(function(item){ --> O RETORNO DA FUNCAO TRAZ UM OBJ LISTA RESULTS, PEGO, PERCORRO, E ADICIONO A INFO NA MINHA LISTA NAMES
        //     names.push(item.name)
        // });

        // const names = results.results.map(function(pessoa){ //Com map, RECEBO NO OBJ, PERCORRO O OBJETO, PASSO O PSSOA COMO PARAM E JÁ RETORNO O PESSOA.NOME QUE E A PROP DO OBJ PESSOA
        //     return pessoa.name
        // })
         
       // const names = results.results.map((pessoa) => pessoa.name) ==> FORMA MAIS ELEGANTE DE SE FAZER

        const names = results.results.meuMap(function(pessoa, indice){
            return `[${indice}]${pessoa.name}`
        })


        console.log(`nomes`, names)


    } catch (error) {
        console.error(`algo deu errado`, error)
    }
}

main()