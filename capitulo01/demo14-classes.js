class Heroi {
    atacar(){
        console.log(`atacou`);
    }
    defender() {
        console.log(`defendeu`);
    }
}

const heroi = new Heroi()
heroi.atacar()
heroi.defender()

//usando constructor

class Heroi2{
    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
    }

    atacar(){
        console.log(`O ${this.nome} Atacou!!`)
    }
}

const heroi02 = new Heroi2(
    `Flash`, 20
)
heroi02.atacar()


class Heroi3 {
    static obterAnoNascimento(idade){
        return 2020 - idade
    }
}
const anoNascimento = Heroi3.obterAnoNascimento(27)
console.log(`
    O ano de nascimento do Heroi é ${anoNascimento}
`)