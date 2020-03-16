const service = require('./service') //importando o mod criado no arquivo service

async function main(){
    try {
        const result = await service.obterPessoas('a') 
        const names = [] //na chamada service, um dos resultados da funcao eh um obj, e dentro, um array de outros objetos. iterar no array, trazendo um dos valores e adicionando do array names.
        
        console.time('for') // --> delimitar o tempo de cada funcao for           
            for(let i = 0; i <= result.results.length - 1; i++){   //menos um, ou seja, tamanho-1 é a ultima posicao do array
                const pessoa = result.results[i]
                names.push(pessoa.name)
            }     
        console.timeEnd('for')
        
        console.time('forin')    
            for(let i in result.results){
                const pessoa = result.results[i]
                names.push(pessoa.name)

            }       
        console.timeEnd('forin')
        
        console.time('forof')
            for(pessoa in result.results)
            {
                names.push(pessoa.name)
            }
        console.timeEnd('forof')

       console.log(`names`, names)

    } catch (error) {
        console.error(`erro nao esperado...`, error)
    }
}

main()