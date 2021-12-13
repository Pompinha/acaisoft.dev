 $(document).ready(function() {
 var botao = $('.bt1'); //classe que será clicada
 var dropDown = $('.ul-vendas');  //classe que vai ser dropada   

    botao.on('click', function(event){

        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

  $(document).ready(function() {
 var botao = $('.bt2');
 var dropDown = $('.ul-produtos');    

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});


    $(document).ready(function() {
 var botao = $('.bt3');
 var dropDown = $('.ul-caixas');    

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});
