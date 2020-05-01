const podeDirigir = true;
if (podeDirigir) console.log("ela pode dirigir");

const saldoEmConta = 0;
if (!saldoEmConta) console.log("não tem saldo!!!");

const boolComString = "ae Hackerzão!!";

/**
 * força o valor a true ou false
 * de acordo com a tabela
 */
console.log("boolComString", !!boolComString);

//negacao
console.log("negacao", !boolComString);

//negacao + forçar a bool
console.log("negação + forçar a bool", !!!boolComString);
