

function aumentar(){
    const numero = document.getElementById("numero").value;
    let operacao = (numero) - (-1) ;
    let resultado = document.getElementById("valorAumentado").innerHTML = "<p class='Text'> Número aumentado: "+ operacao +"</p>";
}

function diminuir(){
    const numero = document.getElementById("numero").value;
    let operacao = (numero) - 1;
    let resultado = document.getElementById("valorDiminuido").innerHTML = "<p class='Text'> Número diminuido: "+ operacao +"</p>";
}