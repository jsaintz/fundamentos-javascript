const ID_CONTEUDO = "conteudo"
const ID_BOTAO_JOGAR = "jogar"
class Tela {
    static obterCodigoHtml(item) {
       return `
        <div class="col-md-3">
            <div class="card" style="width: 50%;">
                <img name="${item.nome}" src="${item.img}" class="card-img-top" alt="..." />
            </div>
            <br />
        </div> 
        `
    }
    static alterarConteudoHTML(codigoHtml) {
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHtml
    }
    static gerarStringHTMLPelaImagem(data) {
        return data.map(Tela.obterCodigoHtml).join('')
    }

    static atualizarImagens(itens) {
        const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens)
        Tela.alterarConteudoHTML(codigoHtml)
    }

    static configurarBotaoJogar(funcaoOnclick) {
        const btnJogar = document.getElementById(ID_BOTAO_JOGAR)
        btnJogar.onclick = funcaoOnclick
    }
}

