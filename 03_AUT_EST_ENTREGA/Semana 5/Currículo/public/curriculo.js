function adiciona(){
    var frase = document.getElementById("frase").innerHTML = "<p class = 'text'> Muito obrigada por ter lido até aqui! Volte sempre que for necessário.</p>"
}

function esconde(){
    $(document).ready(function(){
        $("#esconder").click(function(){
          $("p").hide();
        });
      });
}

function mostra(){
    $(document).ready(function(){
        $("#mostrar").click(function(){
          $("p").show();
        });
      });
}
