$(document).ready(function () {
    const tarefas = [];

    $("#form").submit(function (e) {
        e.preventDefault();
        addTarefa();
    });

    function addTarefa() {
        let tarefa = $("#nome-tarefa").val().trim();
        if (tarefa === '') return; // Para não adicionar tarefas vazias

        tarefas.push(tarefa);
        renderTarefas();

        $("#nome-tarefa").val(""); // Limpa o input após adicionar
    }

    function renderTarefas() {
        $("#lista-tarefas").empty(); // Limpa a lista antes de recriar

        tarefas.forEach((tarefa, index) => {
            let li = $("<li>").text(tarefa).attr("data-index", index);
            $("#lista-tarefas").append(li);
        });
    }

    // Evento de clique nos itens da lista para aplicar/remover o efeito riscado
    $("#lista-tarefas").on("click", "li", function () {
        $(this).toggle
        $(this).toggleClass("riscado");
    });
});


/*
const form = document.getElementById('form');
const cadastrarTarefa = document.getElementById('nome-tarefa');
const listaTarefas = document.getElementById('lista-tarefas'); // Elemento onde as tarefas serão adicionadas
const tarefas = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();
    addTarefa();
});

function addTarefa() {
    if (cadastrarTarefa.value.trim() === '') return; // Para não adicionar tarefas vazias

    tarefas.push(cadastrarTarefa.value); // Adiciona a nova tarefa ao array

    renderTarefas(); // Atualiza a exibição das tarefas

    cadastrarTarefa.value = ''; // Limpa o campo de input após adicionar
}

function renderTarefas() {
    listaTarefas.innerHTML = ''; // Limpa a lista antes de recriar os elementos

    tarefas.forEach(tarefa => {
        const li = document.createElement('li');
        li.textContent = tarefa;
        listaTarefas.appendChild(li);
    });
}

*/