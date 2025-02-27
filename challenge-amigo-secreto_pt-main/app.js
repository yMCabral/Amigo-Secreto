//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeNomes = [];
let armazenarNomes = (listaDeNomes);
let nomeSorteado = sortearNomeAleatorio;

function adicionarNome() {
    const nomeInput = document.getElementById('nomeInput');
    const nome = nomeInput.value.trim();
    if (nome) {
        listaDeNomes.push(nome);
        nomeInput.value = '';
        mostrarNomes();
    }else {
        alert('Por favor, insira um nome válido.');
    }
}

function sortearNomeAleatorio() {
    let nomeSorteado = listaDeNomes [Math.floor(Math.random() * listaDeNomes.length)];
    console.log (listaDeNomes);
}
//após colocar o nome
document.querySelector("armazenarNomes").addEventListener("click", ()  => {
    console.log (listaDeNomes);
})

function limparLista() {
    nomes = [];
    document.getElementById('resultado').innerText = '';
    mostrarNomes();
}
