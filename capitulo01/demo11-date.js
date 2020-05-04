//meses começam do zero!
const dataAniversario = new Date(2020, 0, 20);
console.log(dataAniversario);

const primeiraDatadoJS = new Date(0);
console.log(primeiraDatadoJS.getTime());

const hoje = new Date();
console.log(hoje.toLocaleDateString());

//formato global recomendado!
console.log(hoje.toISOString());

const dia = hoje.getDate();
hoje.setDate(dia + 5); // +5 dias depois de hoje
hoje.setHours(10, 30, 0);
console.log(hoje);

console.log(
  ` 
    Dia: ${hoje.getDate()}
    Mes: ${hoje.getMonth()}
    Ano: ${hoje.getFullYear()}
    Hora: ${hoje.getHours()}
    Minuto: ${hoje.getMinutes()}
    Secundos: ${hoje.getSeconds()}
`
);

//comparar datas
console.log(new Date(2020, 1, 2020) > new Date(2000, 1, 1))