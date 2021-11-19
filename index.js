let caixa = document.createElement("div");
caixa.className = 'caixaaberta';
let imagem = document.querySelector("#caixaimagem");

let botao1 = document.createElement("img");
botao1.className = 'img_banner';
botao1.src = "https://media.contentapi.ea.com/content/dam/eacom/app-cta/svg/apple/apple-badge-cta-br.svg"

let botao2 = document.createElement("img");
botao2.className = 'img_banner';
botao2.src = "https://media.contentapi.ea.com/content/dam/eacom/app-cta/svg/google/google-badge-cta-br.svg";

function abrir() {

    imagem.appendChild(caixa);

    setTimeout(botoes, 500);

}

function botoes() {

    caixa.appendChild(botao1);
    caixa.appendChild(botao2);
}

function fechar() {

    caixa.removeChild(botao1);
    caixa.removeChild(botao2);
    imagem.removeChild(caixa);
}