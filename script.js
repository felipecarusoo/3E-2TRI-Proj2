const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")

const perguntas = [
    {
        enunciado: "",
        alternativas: [
            {
                texto:"",
                afirmação: ""
            },
            {
                texto: "",
                afirmação: ""
            }
        ]
    },
    {
        enunciado: "repete o padrao superior para todas perguntas",
    }
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta () {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[length];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativa();
}

function respostaSelecionada (opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}


function mostraResultado () {
    caixaPerguntas.textContent = "Em 2030...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
