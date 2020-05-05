const ID_CONTEUDO = "conteudo"
const ID_BOTAO_JOGAR = "jogar"
const ID_MENSAGEM = "mensagem"
const CLASSE_INVISIVEL = "invisible"
const MENSAGENS = {
    sucesso: {
        texto: "Combinação correta!",
        classe: "alert-success"
    },
    erro: {
        texto: "Combinação incorreta!",
        classe: "alert-danger"
    }
}
class Tela {
    static obterCodigoHtml(item) {
       return `
        <div class="col-md-3">
            <div class="card" style="width: 50%;" onclick="window.verificarSelecao('${item.id}', '${item.nome}')">
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
    static exibirMensagem(sucesso = true) {
        
        const elemento = document.getElementById(ID_MENSAGEM)
        if(sucesso) {
            elemento.classList.remove(MENSAGENS.erro.classe)
            elemento.classList.add(MENSAGENS.sucesso.classe)
            elemento.innerText = MENSAGENS.sucesso.texto
        }
        else {
            elemento.classList.remove(MENSAGENS.sucesso.classe)
            elemento.classList.add(MENSAGENS.erro.classe)
            elemento.innerText = MENSAGENS.erro.texto
        }

        elemento.classList.remove(CLASSE_INVISIVEL)
    }

    static atualizarImagens(itens) {
        const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens)
        Tela.alterarConteudoHTML(codigoHtml)
    }
    static exibirHerois(nome, img) {
        const elements = document.getElementsByName(nome)
        elements.forEach(item => (item.src = img))
    }
    static configurarBotaoJogar(funcaoOnclick) {
        const btnJogar = document.getElementById(ID_BOTAO_JOGAR)
        btnJogar.onclick = funcaoOnclick
    }
    static configurarClickVerificarSelecao(funcaoOnclick) {
        window.verificarSelecao = funcaoOnclick
    }
}

