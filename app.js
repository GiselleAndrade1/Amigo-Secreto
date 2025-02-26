/**
 * Amigo Secreto Virtual
 *
 * Este script JavaScript implementa a lógica para um sorteio de amigo secreto virtual.
 * Ele permite adicionar participantes, realizar o sorteio e exibir os resultados na página.
 *
 * Autor: Giselle Andrade
 * Data: 2025-02-26
 */

let listaDeamigos = [];
let lista = document.getElementById('listaAmigos');
let inputNomeInserido = document.getElementById('amigo');
let resultado = document.getElementById('resultado');

/**
 * Adiciona um amigo à lista de amigos, com validações.
 */
function adicionarAmigo() {
    let nomeAmigo = inputNomeInserido.value.trim();

    if (nomeAmigo === '') {
        alert('Informe o nome do amigo.');
        return;
    }

    if (listaDeamigos.includes(nomeAmigo)) {
        alert('Amigo já adicionado.');
        return;
    }

    listaDeamigos.push(nomeAmigo);
    atualizarLista();
    inputNomeInserido.value = '';
}

/**
 * Atualiza a exibição da lista de amigos na página.
 */
function atualizarLista() {
    lista.innerHTML = '';

    listaDeamigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

/**
 * Realiza o sorteio dos amigos secretos, garantindo que ninguém tire o próprio nome.
 */
function sortearAmigo() {
    if (listaDeamigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }

    let amigosEmbaralhados = embaralharArray(listaDeamigos);
    let resultados = gerarParesAmigoSecreto(amigosEmbaralhados);

    exibirResultados(resultados);
}

/**
 * Embaralha um array usando o algoritmo de Fisher-Yates.
 *
 * @param {Array} array O array a ser embaralhado.
 * @returns {Array} O array embaralhado.
 */
function embaralharArray(array) {
    const novoArray = [...array];
    for (let i = novoArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [novoArray[i], novoArray[j]] = [novoArray[j], novoArray[i]];
    }
    return novoArray;
}

/**
 * Gera os pares de amigos secretos, garantindo que ninguém tire o próprio nome.
 *
 * @param {Array} amigosEmbaralhados O array de amigos embaralhado.
 * @returns {Array} Um array de objetos representando os pares de amigos secretos.
 */
function gerarParesAmigoSecreto(amigosEmbaralhados) {
    const resultados = [];
    for (let i = 0; i < amigosEmbaralhados.length; i++) {
        const amigo = amigosEmbaralhados[i];
        const amigoSecreto = amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length];
        resultados.push({ amigo, amigoSecreto });
    }
    return resultados;
}

/**
 * Exibe os resultados do sorteio na página.
 *
 * @param {Array} resultados O array de objetos representando os pares de amigos secretos.
 */
function exibirResultados(resultados) {
    resultado.innerHTML = '';

    resultados.forEach(item => {
        let itemLista = document.createElement('li');
        itemLista.textContent = `${item.amigo} tirou ${item.amigoSecreto}`;
        resultado.appendChild(itemLista);
    });
}

/**
 * Limpa a lista de amigos e os resultados do sorteio.
 */
function limparLista() {
    listaDeamigos = [];
    atualizarLista();
    resultado.innerHTML = '';
}

/**
 * Função para adicionar um amigo ao pressionar a tecla Enter.
 */
function adicionarAmigoComEnter(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
}

// Adiciona ouvintes de evento aos botões e ao campo de entrada
inputNomeInserido.addEventListener('keypress', adicionarAmigoComEnter);