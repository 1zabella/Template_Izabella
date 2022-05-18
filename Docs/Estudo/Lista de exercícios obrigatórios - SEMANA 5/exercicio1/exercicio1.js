var numero1;
var numero2;
var resultado;
function operação() {
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    numero1 = parseInt(numero1)
    numero2 = parseInt(numero2)
    var tipoOperacao = document.getElementById("operacao").value;
    if (tipoOperacao == "soma") {
       resultado = numero1 + numero2;
    }

   else  if (tipoOperacao == "subtracao") {
        resultado = numero1 - numero2;
    }

    else if (tipoOperacao == "multiplicacao") {
        resultado = numero1 * numero2;
    }
    
    else if (tipoOperacao == "divisao") {
        resultado = numero1 / numero2;
    }

    else if (tipoOperacao == "inteiro") {
        resultado = Math.ceil(numero1/numero2)
    }

    else if (tipoOperacao == "resto") {
    resultado =  numero1 % numero2
    }

    document.getElementById("resultado").innerHTML = "resultado: " + resultado;
}
