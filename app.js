/**
 * Amigo Secreto - Challenger Alura + Oracle
 *
 * Este script JavaScript implementa a lógica para um sorteio de amigo secreto virtual.
 * Ele permite adicionar participantes, realizar o sorteio e exibir os resultados na página.
 *
 * Autor: Giselle Andrade
 * Data: 2025-02-26
 */

// Declarando o array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let input = document.getElementById("nomeInput");
    let nome = input.value.trim();

    // Validação: campo não pode estar vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);

    // Atualiza a lista exibida na página
    atualizarLista();

    // Limpa o campo de entrada
    input.value = "";
}

// Função para atualizar a lista na interface
function atualizarLista() {
    let lista = document.getElementById("listaNomes");
    
    // Limpa a lista antes de adicionar os novos elementos
    lista.innerHTML = "";

    // Percorre o array e adiciona cada nome na lista
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Validação: precisa ter pelo menos um nome na lista
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione pelo menos um nome antes de sortear.");
        return;
    }

    // Gerar um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    let amigoSorteado = amigos[indiceSorteado];

    // Exibir o resultado na página
    document.getElementById("resultado").textContent = "Amigo Secreto: " + amigoSorteado;
}