function troca_destroca(){
    // Atribuição de valores que estão no html.
    var numero1 = document.getElementById("numero1").value; 
    var numero2 = document.getElementById("numero2").value;

    //Troca dos valores anteriores de forma infinita (troca e desctroca sempre que clica no botão).
    document.getElementById("numero1").value = numero2
    document.getElementById("numero2").value = numero1

    // var numero1_original = numero1
    // var numero1_trocado = (numero1=numero2)
    // var numero2_trocado = (numero2=numero1_original)
    console.log(numero1_trocado , numero2_trocado)
    var resultado = document.getElementById("Resultado").innerHTML = "<p class='texto'> Números trocados: <br> Novo número 1: " + numero1_trocado + "<br>" + "Novo número 2: "+ numero2_trocado + "</p>";
}