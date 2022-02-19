const idListaTarefas = 'lista-tarefas';
const botaoAdicionar = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById(idListaTarefas);
const valorInput = document.getElementById('texto-tarefa');

// Mover item para baixo

const moverBaixo = document.getElementById('mover-baixo');

function trocaItens(item, outroItem, clone) {
  const itemSelecionado = item;
  const itemAcimaOuAbaixo = outroItem;

  if (itemSelecionado.className.includes('selected')) {
    itemSelecionado.innerHTML = outroItem.innerHTML;
    itemAcimaOuAbaixo.innerHTML = clone.innerHTML;

    itemSelecionado.className = outroItem.className;
    itemAcimaOuAbaixo.className = clone.className;
  }
}

function moverItemParaBaixo() {
  const itens = document.getElementsByTagName('li');

  for (let i = itens.length - 1; i >= 0; i -= 1) {
    if (itens[i].nextElementSibling !== null) {
      const clone = itens[i].cloneNode(true);
      const itemAbaixo = itens[i].nextElementSibling;

      trocaItens(itens[i], itemAbaixo, clone);
    }
  }
}

moverBaixo.addEventListener('click', moverItemParaBaixo);

// Mover item para cima

const moverCima = document.getElementById('mover-cima');

function moverItemParaCima() {
  const itens = document.getElementsByTagName('li');

  for (let i = 0; i < itens.length; i += 1) {
    if (itens[i].previousElementSibling !== null) {
      const clone = itens[i].cloneNode(true);
      const itemAcima = itens[i].previousElementSibling;

      trocaItens(itens[i], itemAcima, clone);
    }
  }
}

moverCima.addEventListener('click', moverItemParaCima);

// Apagar tarefa selecionada

const botaoTarefaSelecionada = document.getElementById('remover-selecionado');

function apagarTarefaSelecionada() {
  const itemSelecionado = document.querySelector('.selected');

  itemSelecionado.remove();
}

botaoTarefaSelecionada.addEventListener('click', apagarTarefaSelecionada);

// Apagar tarefas completadas

const botaoTarefasCompletadas = document.getElementById('remover-finalizados');

function apagaTarefasCompletadas() {
  const itensRiscados = document.querySelectorAll('.completed');

  for (let i = 0; i < itensRiscados.length; i += 1) {
    itensRiscados[i].remove();
  }
}

botaoTarefasCompletadas.addEventListener('click', apagaTarefasCompletadas);

// Limpar lista

const botaoLimpar = document.getElementById('apaga-tudo');

function limpaLista() {
  listaTarefas.innerHTML = '';
}

botaoLimpar.addEventListener('click', limpaLista);

// Mudar a cor de fundo do item selecionado

function mudaCorSelecionado(event) {
  const itens = document.getElementsByTagName('li');
  const alvo = event.target;

  for (let i = 0; i < itens.length; i += 1) {
    if (itens[i].classList.contains('selected')) {
      itens[i].classList.remove('selected');
    }
  }
  alvo.classList.toggle('selected');
}

// Risca tarefa selecionada

function riscaTarefaSelecionada(event) {
  const itens = document.getElementsByTagName('li');
  const alvo = event.target;

  for (let i = 0; i < itens.length; i += 1) {
    if (itens[i].classList.contains('selected')) {
      itens[i].classList.remove('selected');
    }
  }
  alvo.classList.toggle('completed');

  mudaCorSelecionado(event);
}

// Adiciona tarefa

function adicionaTarefas() {
  const itemLista = document.createElement('li');
  itemLista.innerHTML = valorInput.value;
  valorInput.value = '';

  listaTarefas.appendChild(itemLista);

  const itens = document.getElementsByTagName('li');

  for (let i = 0; i < itens.length; i += 1) {
    itens[i].addEventListener('click', mudaCorSelecionado);
    itens[i].addEventListener('dblclick', riscaTarefaSelecionada);
  }
}

botaoAdicionar.addEventListener('click', adicionaTarefas);

// Exibir lista se já houver uma salva

function renderizaListaSalva() {
  if (localStorage.getItem('texto') !== null && localStorage.getItem('classe') !== null) {
    const textoDaLista = JSON.parse(localStorage.getItem('texto'));
    const classeDaLista = JSON.parse(localStorage.getItem('classe'));

    for (let i = 0; i < textoDaLista.length; i += 1) {
      const itens = document.getElementById(idListaTarefas);

      adicionaTarefas();

      itens.children[i].innerText = textoDaLista[i];
      itens.children[i].className = classeDaLista[i];
    }
  }
}

window.onload = renderizaListaSalva;

// Salvar lista no localStorage

const botaoSalvarLista = document.getElementById('salvar-tarefas');

function salvaLista() {
  const lista = document.getElementById(idListaTarefas);
  const arrayLista = [];
  const arrayListaClasse = [];

  for (let i = 0; i < lista.children.length; i += 1) {
    arrayLista.push(lista.children[i].innerHTML);
    arrayListaClasse.push(lista.children[i].className);
  }

  localStorage.setItem('texto', JSON.stringify(arrayLista));
  localStorage.setItem('classe', JSON.stringify(arrayListaClasse));
}

botaoSalvarLista.addEventListener('click', salvaLista);
