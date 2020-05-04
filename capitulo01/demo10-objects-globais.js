console.log('Keys:',Object.keys({nome:'Jonatas'}))
console.log('values:',Object.values({nome:'Jonatas'}))
console.log('now:',Date.now())
console.log('random:',Math.random())

//global 
console.log('global: ', global)

//exercicio
const animal = {_id: '123', get id() {return this._id } }
console.log(animal._id)

//exercicio
const animal = {_idade: '123', set idade(valor) {this._idade = valor } }
animal.idade = 10

console.log(animal.idade)