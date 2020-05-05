class JogoDaMemoria {
    // 3o importar a tela como dependencia
    // iria funcionar sem importar chamando a variavel Tela global
    // mas não é uma boa prática, a melhor prática é obter esse valor por dependencia
    // depois usar a partir do this
    
    constructor({ tela }) {
        this.tela = tela

        this.heroisIniciais = [
            // relativo ao index.html pois será carregado lá
            { img: './arquivos/batman.png', nome: 'batman'},
            { img: './arquivos/ciclop.png', nome: 'ciclop'},
            { img: './arquivos/deadpool.png', nome: 'deadpool'},
            { img: './arquivos/mulhermaravilha.png', nome: 'mulhermaravilha'},
        ]
        
    }

    // 1o -para usar o this, nao podemos usar o static
    inicializar() {
        // 2o - vamos precisar importar a tela para fazer alterações nela
        // 3o - chamar a funcao de tela apara atualizar as imagens
        this.tela.atualizarImagens(this.heroisIniciais)
    }

}