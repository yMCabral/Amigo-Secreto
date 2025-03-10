//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeNomes = [];

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
    if (listaDeNomes.length === 0) {
        alert('A lista está vazia! Adicione nomes antes de sortear.');
        return;
        document.getElementById('resultado').innerText = `Nome sorteado: ${nomeSorteado}`;
    }
    let nomeSorteado = listaDeNomes [Math.floor(Math.random() * listaDeNomes.length)];
    console.log("Nome sorteado:", nomeSorteado);
    document.getElementById('resultado').innerText = `nome sorteado ${nomeSorteado}`;   
    }
    
//após colocar o nome
document.addEventListener("DOMContentLoaded", () => {
    const botaoArmazenar = document.getElementById("armazenarNomes");
    if (botaoArmazenar) {
        botaoArmazenar.addEventListener("click", () => {
            console.log(listaDeNomes);
        });
    } else {
        console.error("Botão armazenarNomes não encontrado.");
    }
});
function limparLista() {
    listaDeNomes = [];
    document.getElementById('resultado').innerText = " ";    
    mostrarNomes();
}
function mostrarNomes() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = listaDeNomes.map(nome => `<li>${nome}</li>`).join('');
}
