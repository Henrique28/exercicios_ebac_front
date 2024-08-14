$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();

        const nomeTarefa = $('#input-tarefa').val();
        const linhaTarefa = $(`<li><span>${nomeTarefa}<span></li>`);

        linhaTarefa.prependTo('.lista-tarefas');

        $('#input-tarefa').val('');
    })

    $('.lista-tarefas').on('click', 'span', function(){
        $(this).toggleClass('line')
    });
});