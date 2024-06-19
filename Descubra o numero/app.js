let listaSorteados = [];
let numeroLimite = 10
let numeroSecreto = numeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
}

function textoincial(){
exibirTextoNaTela('h1' , 'Jogo dos números secretos');
exibirTextoNaTela('p','Escolha o numero entre 1 e 10:');
}
textoincial();

function verificarChute(){
    let chute = document.querySelector('input').value;
   
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1' ,'Parabéns!');
        
        let mensagemTentativas = `Você acertou o número secreto na ${tentativas}° tentetiva!`;
        exibirTextoNaTela('p',mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } 
    else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p','O número secreto é menor');
        }
        else {
    exibirTextoNaTela('p' ,'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
    }


function numeroAleatorio() {
   let numeroEscolhido= parseInt(Math.random() * numeroLimite + 1);
   let elementosLista = listaSorteados.length;

   if(elementosLista == numeroLimite) {
    listaSorteados = [];
   }
   if(listaSorteados.includes(numeroEscolhido)) {
    return numeroAleatorio();
   }
   else{
    listaSorteados.push(numeroEscolhido);
    console.log(listaSorteados);
    return numeroEscolhido;
   }
    }

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    textoincial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}