const minhaLista = [];
const minhaListaDeTarefas = [
    'Mandar Email',
    'Colocar comida para o Dog',
    'Limpar o quarto'
];

// console.log(minhaListaDeTarefas[0]);
// console.log(minhaListaDeTarefas[1]);
// console.log(minhaListaDeTarefas)[4];

//quantidade de itens no array
// console.log(minhaListaDeTarefas.length);

//adicionar item
minhaListaDeTarefas.push('formatar PC');

//remover ultimo iltem da lista
const removerUltimoItem = minhaLista.pop();

//remover o primeiro item da lista
const primeiro = minhaListaDeTarefas.shift();

//remover um item especifico apatir de um indice 

//qual item do inicio
//quantos remover
//minhaListaDeTarefas.splice(2,1);
//console.log(minhaListaDeTarefas);


const itens = [
    1, 'computador',0.22
];

//verificar o tipo do array
// console.log(typeof(itens));

//verificar se é array da forma correta
//console.log(Array.isArray(itens));

//ordernar Array
const numeros = [3,2,1,0];
//console.log(numeros.sort());

//juntar dois arrays
const novo = itens.concat(['a','c','b']);
// console.log(novo);

//juntar dois arrays em uma string 
// console.log(itens.join());

//verificar o indice de um idicice do item
const indice = itens.indexOf('chaves');
console.log(itens[indice]);