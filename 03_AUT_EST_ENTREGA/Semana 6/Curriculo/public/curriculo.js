window.onload = function() {
debugger
infos()
};
function adiciona() {
  var frase = document.getElementById("frase").innerHTML = "<p class = 'text'> Muito obrigada por ter lido até aqui! Volte sempre que for necessário.</p>"
}

function esconde() {
  $(document).ready(function () {
    $("#esconder").click(function () {
      $("p").hide();
    });
  });
}

function mostra() {
  $(document).ready(function () {
    $("#mostrar").click(function () {
      $("p").show();
    });
  });
}

/* Função que faz uma requisição GET */
function infos() {
  var url = "http://127.0.0.1:3061/infos";
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, false);
  xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
  var resultado = JSON.parse(xhttp.response);
  var lista = "";
  document.getElementById("email").innerHTML = resultado[0].email;
  document.getElementById("telefone").innerHTML = resultado[0].telefone;
  document.getElementById("nascimento").innerHTML = resultado[0].data_de_nascimento +" - "+ resultado[0].idade;

  console.log(resultado);
}
