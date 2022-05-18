function mudança(){
    var nome = document.getElementById("nome").value;
    var valor = document.getElementById("valor").value;
    var nome2 = nome + "baldo"
    var valor2 = (valor * 1.15)
   

    var resposta_nome = document.getElementById("resposta_nome").innerHTML = "<p class= 'text'> Novo nome: " + nome2 + "</p>"
    var resposta_valor = document.getElementById("resposta_valor").innerHTML = "<p class='text'> Novo valor: " + valor2 + "</p>"
}