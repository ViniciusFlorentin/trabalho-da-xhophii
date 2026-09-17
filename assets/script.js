function trocarImagem(imagemSelecionada) {
    let imagemPrincipal = document.getElementById("imagemPrincipal");
    imagemPrincipal.style.transition = "opacity 0.5s ease-in-out";
    imagemPrincipal.style.opacity = "0";
    setTimeout(() => { imagemPrincipal.src = imagemSelecionada.src; imagemPrincipal.style.opacity = "1"; }, 300);
}

function mudarInformacoes(botaoEscolhido, imagem) {
    let imagemPrincipal = document.getElementById("imagemPrincipal");
    let precoProduto = document.getElementById("precoProduto");
    let qtdDisponivel = document.getElementById("qtdDisponivel");
    imagemPrincipal.style.transition = "opacity 0.5s ease-in-out";
    imagemPrincipal.style.opacity = "0";
    setTimeout(() => {
        imagemPrincipal.src = imagem;
        imagemPrincipal.style.opacity = "1";
        if (botaoEscolhido.id === "btnModeloPreto") {
            precoProduto.innerHTML = "R$56,90";
            qtdDisponivel.innerHTML = "171 peças disponíveis";
        } else if (botaoEscolhido.id === "btnModeloAzul") {
            precoProduto.innerHTML = "R$59,90";
            qtdDisponivel.innerHTML = "152 peças disponíveis";
        } else if (botaoEscolhido.id === "btnModeloVerde") {
            precoProduto.innerHTML = "R$49,90";
            qtdDisponivel.innerHTML = "213 peças disponíveis";
        } else if (botaoEscolhido.id === "btnModeloCinza") {
            precoProduto.innerHTML = "R$66,90";
            qtdDisponivel.innerHTML = "353 peças disponíveis";
        } else if (botaoEscolhido.id === "btnModeloRosa") {
            precoProduto.innerHTML = "R$69,90";
            qtdDisponivel.innerHTML = "319 peças disponíveis";
        }
    }, 300);
}

function mudarDisponivel(botaoEscolhido) {
    if (botaoEscolhido.id == "btnTamanhoP") {
        document.getElementById('tamanhoSelecionado').innerHTML = "Tamanho Selecionado: P";
    }
    else if (botaoEscolhido.id == "btnTamanhoM") {
        document.getElementById('tamanhoSelecionado').innerHTML = "Tamanho Selecionado: M";
    }
    else if (botaoEscolhido.id == "btnTamanhoG") {
        document.getElementById('tamanhoSelecionado').innerHTML = "Tamanho Selecionado: G";
    }
    else if (botaoEscolhido.id == "btnTamanhoGG") {
        document.getElementById('tamanhoSelecionado').innerHTML = "Tamanho Selecionado: GG";
    }
}

function atualizarNomeArquivo() {
    let input = document.getElementById('fotoInputFile');
    let nomeArquivo = document.getElementById('nomeArquivo');
    if (input.files.length > 0) {
        nomeArquivo.textContent = input.files[0].name;
    }
    else {
        nomeArquivo.textContent = "Nenhum arquivo escolhido";
    }
}