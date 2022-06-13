function troca_destroca(){
    // Atribuição de valores que estão no html.
    var elemento1 = document.getElementById("qualquerCoisa").value; 
    var elemento2 = document.getElementById("qualquerCoisa2").value;

    //Troca dos valores anteriores de forma infinita (troca e desctroca sempre que clica no botão).
    document.getElementById("qualquerCoisa").value = elemento1;
    document.getElementById("qualquerCoisa2").value = elemento2;

    var resultado = document.getElementById("resultado").innerHTML = "<p class='texto'> Elementos trocados: <br> Novo elemento 1: " + elemento2 + " <br> Novo elemento 2: " + elemento1 + "</p>"
}