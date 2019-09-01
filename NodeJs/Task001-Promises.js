

/* IMPORT DE MÓDULO DISPONÍVEL PARA USO*/
const util = require('util') //Me permite transformar uma callback em uma Promise, para não precisarmos fazer isso sempre manualmente

const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario(){
    //Se der algo inesperado => reject(ERRO pra ele)
    //Se passar e for success => resolve()
    return new Promise(function resolverPromise(resolve, reject){ 
        setTimeout(function(){
            //Se quisesse retornar o reject... return reject(new Error('texto de erro'))
            
            return resolve({
                id: 1,
                nome: 'johw',
                dataNascimento: new Date()
            })
        }, 1000)
    })  
}

function obterTelefone(idUsuario){
   
	return new Promise(function resolverPromise(resolve,reject){
		setTimeout(() => {
			return resolve({
            	telefone:'985859164',
            	ddd: '19',
        	})
    	}, 2000)						
	})

}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua:'dos Santos',
            numero: 55
        })
    }, 3000)
}

main()
async function main(){
	try{
		console.time('medida-promise') //Funcao para medir o tempo de execucao

		const usuario = await obterUsuario()
		//const telefone = await obterTelefone(usuario.id)
		//const endereco = await obterEnderecoAsync(usuario.id)
		
		const resultado = await Promise.all([
			obterTelefone(usuario.id),
			obterEnderecoAsync(usuario.id)		
		])

		const endereco = resultado[1]
		const telefone = resultado[0]

		console.log(`
			Resultado com async...... 
			Nome: ${usuario.nome},
			Endereco: ${endereco.rua}, ${endereco.numero},
			Telefone: (${telefone.ddd}) ${telefone.telefone}		
		`) 
		
		console.timeEnd('medida-promise')
	}catch(error){
		console.log('Deu bem ruim no try onde tava resovendo as await :x ...', error)
	}
}

/*
 	O CÓDIGO FOI COMENTADO, POIS AGORA VAMOS UTILIZAR AS PALAVRAS CHAVE ASYNC/AWAIT. ASYNC NOS PERMITE RETORNAR UMA PROMISE

//Criando uma variavel obj que vai receber os dados do objeto trazido pela funcao
const userPromise = obterUsuario()
    //obterUser é uma funcao que retorna uma Promise, e a promisse retorna 2 resultados que ela tratou lá
    //Para tratar os dados da promise se for sucesso, usamos o .then
    //Para tratar os dados da promise se for um erro, usamos o .catch

userPromise
	.then(function(usuario){
		return obterTelefone(usuario.id)
			.then(function resolverTelefone(result){
					return {
						usuario: {
							nome: usuario.nome,
							id: usuario.id
						},
						telefone: result
					}						
				})			
	}) 
	.then(function(resultado){
		const endereco = obterEnderecoAsync(resultado.usuario.id)
		return endereco.then(function resolverEndereco(result){
			return {
				usuario: resultado.usuario,
				telefone: resultado.telefone,
				endereco: result			
			}		
		})	
	})
	.then(function(resultado){ //essa function aqui passa uma callback, pra chamar um resultado que é o log
        console.log(`
			Nome: ${resultado.usuario.nome},
			Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero},
			Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}		
		`) 
    })
    .catch(function(error){
        console.error('Deu ruim, vey... ', error)
    })

*/ 	




