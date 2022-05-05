d
function contaVelocidade(){
    // debugger
    const gravidade = 10;
    var VelocidadeInicial = document.getElementById("VelocidadaInicial").value;
    

    var altura = (VelocidadeInicial**2)/(2*gravidade);

    var tempo = VelocidadeInicial/gravidade;

    console.log(altura , tempo);
    var ResultadoTela = document.getElementById("ResultadoTela").innerHTML = "<p class='texto'>Altura máxima: " + altura + "<br>"+ "<br>" + " Tempo total: " + tempo +"</p>";
}

