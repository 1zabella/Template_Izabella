var ID;
window.onload = function () {
  infos()
  get()
}

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
  document.getElementById("nascimento").innerHTML = resultado[0].data_de_nascimento + " - " + resultado[0].idade;

  console.log(resultado);
}

function salvar(comentario) {
  debugger
  if (ID != null && ID != "") {
    updateDado(comentario);
  } else {
    insertDado(comentario);
  }
}
function insertDado(comentario) {
  $.ajax({
    type: 'POST',
    url: 'http://127.0.0.1:3061/insertComentario',
    data: { comentario: comentario },
  }).done(function () {
    get();
  }).fail(function (msg) {
  }).always(function (msg) {
  });

}
function get() {
  $.ajax({
    url: 'http://127.0.0.1:3061/getComentario',
    type: 'GET',
    success: data => {
      var lista = '';
      console.log(data);
      debugger
      data.forEach(element => {
        lista += `<li>${element.comentario}<button onclick="atualizar(${element.id},'${element.comentario}')">Editar</button><button onclick="deleteDado(${element.id})">X</button></li>`;
      });
      $('#lista').html(lista);
    }
  });
}

function atualizar(id, comentario) {
  document.getElementById("comentario").value = comentario;
  ID = id;
}


function deleteDado(id) {

  if (confirm('Confirma a exclusão?')) {
    $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:3061/deleteComentario',
      data: { id: id },
    }).done(function () {
      get();
    }).fail(function (msg) {

    }).always(function (msg) {

    });
  }
}

function updateDado(comentario) {
  $.ajax({
    type: 'POST',
    url: 'http://127.0.0.1:3061/updateComentario',
    data: { comentario: comentario, id: ID },
  }).done(function () {
    get();
  }).fail(function (msg) {

  }).always(function (msg) {

  });


}