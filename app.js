let listaDeNumeroSorteados = [];
numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial()

function verificarChute(){
  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou');
    let palavraTentativa= tentativas > 1 ? 'tentativas' : 'tentativa';
    let numeroTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} `;
    exibirTextoNaTela('p', numeroTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled')
  } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'Você errou');
            exibirTextoNaTela('p', 'Número secreto é menor');
        } else {
            exibirTextoNaTela('h1', 'Você errou');
            exibirTextoNaTela('p', 'Número secreto é maior');
        }
        tentativas++
        limparCampo()
  }  
}

function reiniciar() {
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1
    exibirMensagemInicial
    document.getElementById('reiniciar').setAttribute('disable', true)
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumeroSorteados = [];
    }

    if(listaDeNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}

// filter, reduce e map emum array retornar esse array e arrow function

