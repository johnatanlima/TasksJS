const EventEmitter = require('events')
class Emissor extends EventEmitter{
	
}

const meuEmissor = new Emissor()
const nomeEvento = 'usuario:clicou'

meuEmissor.on(nomeEvento, function(click){
	console.log('Um usuario clicou', click)
})

/*
//Abaixo defino uma simulação como se o usuario estivesse clicando na página
meuEmissor.emit(nomeEvento, 'Clicou abrir um menu...')
meuEmissor.emit(nomeEvento, 'Clicou fechar o menu... ')

//Abaixo, a função setInterval a cada 1seg dispara o metodo emit do objeto meuEmissor
let count = 0
setInterval(function(){
	meuEmissor.emit(nomeEvento, 'Clicou fechar o menu... ' + (count++))
}, 1000)
*/

const stdin = process.openStdin()
stdin.addListener('data', function(value){
	console.log(`Voce digitou: ${value.toString().trim()}`)
})
