nomeDaFuncao = () => {
  //bloco de codigo
};

queDiaeHoje = () => {
  const data = new Date();
  console.log(`Hoje é Dia: ${data.getDate()}`);
};

queDiaeHoje();

soma = (val01, val02) => {
  console.log(`A soma de ${val01} + ${val02} é: `, val01 + val02);
};

soma(10, 20);
soma(3, 4);

//Funções podem retornar valores
function soma(val01, val02) {
  return val01 + val02;
}

const idade = 20;
const tamanho = 10;
const resultado = soma(idade, tamanho);
console.log("resultado:", resultado);

function multiplicar(valor01, valor02) {
  const resultado = valor01 * valor02;
  return resultado;
}

console.log(`O Resultado da Multiplicação é: `, multiplicar(10, 30));

const funcionario01 = {
  nome: "Zezinho",
  desconto: 0.2,
  salarioBruto: 2000,
  salarioLiquido: 0,
};

const funcionario02 = {
  nome: "Mariazinha",
  desconto: 0.1,
  salarioBruto: 2000,
  salarioLiquido: 0,
};

function calcularDesconto(salarioBruto, desconto) {
  return salarioBruto - (salarioBruto * desconto);
}

funcionario01.salarioLiquido = calcularDesconto(
  funcionario01.salarioBruto,
  funcionario01.desconto
);

funcionario02.salarioLiquido = calcularDesconto(
  funcionario01.salarioBruto,
  funcionario01.desconto
);

console.log(`
    Salario ${funcionario01.nome}: ${funcionario01.salarioLiquido}
    Salario ${funcionario02.nome}: ${funcionario02.salarioLiquido}
`);
