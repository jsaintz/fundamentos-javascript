const heroi  = {
    nome: 'Flash',
    idade: 100,
    sexo: 'Masculino'
}

// console.log('nome', herois.nome)
// console.log('idade', herois)
// console.log('sexo', herois.sexo)
// console.log('naoExiste', herois.naoExiste)
// heroi.id = 0001
// console.log(heroi)

// //saber chaves 
// console.log(Object.keys(heroi))

// //saber valores 
// console.log(Object.values(heroi))

//juntar dois objetos
const pessoa = {
    tamanho: '10 metros'
}

const novoObj = Object.assign(heroi, pessoa)

// remover item do objeto 
delete novoObj.nome
console.log(novoObj)