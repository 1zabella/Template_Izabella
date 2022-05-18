function saque(){
    //atribuição do valor que deve ser colocado no input do html
    var valor = document.getElementById("valor-a-ser-sacado").value;
    //definição das variáveis que determinam a quantidade de notas 
    var ValorDivididoPorDez = Math.floor(valor/10);
    var RestoValorDivididoPorDez = valor%10;
    var ValorDivididoPorCinco = Math.floor(RestoValorDivididoPorDez/5);
    var RestoValorDivididoPorCinco = RestoValorDivididoPorDez%5;

    var Resultado10 = document.getElementById("Resultado10").innerHTML = "<p class='texto'> Notas de 10 reais: " + ValorDivididoPorDez + "</p>";
    var Resultado5 = document.getElementById("Resultado5").innerHTML = "<p class= 'texto' > Notas de 5 reais: " + ValorDivididoPorCinco + "</p>";
    var Resultado1 = document.getElementById("Resultado1").innerHTML = "<p class= 'texto'> Notas de 1 real " + RestoValorDivididoPorCinco + "</p>";
}
