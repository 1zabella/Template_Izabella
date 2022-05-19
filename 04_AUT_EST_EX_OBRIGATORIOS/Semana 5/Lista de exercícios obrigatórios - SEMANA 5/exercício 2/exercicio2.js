function notas() {
    var preco = document.getElementById("preco").value;
    var PrecoPorCem = Math.trunc(preco / 100);
    console.log(PrecoPorCem)
    var PrecoPorCinquenta = Math.trunc((preco % 100) / 50);
    console.log(PrecoPorCinquenta)
    var PrecoPorVinte = Math.trunc(((preco % 100) % 50) / 20);
    console.log(PrecoPorVinte)
    var PrecoPorDez = Math.trunc((((preco % 100) % 50) % 20) / 10);
    console.log(PrecoPorDez)
    var PrecoPorCinco = Math.trunc(((((preco % 100) % 50) % 20) % 10) / 5);
    console.log(PrecoPorCinco)
    var PrecoPorUm = Math.trunc((((((preco % 100) % 50) % 20) % 10) % 5));
    console.log(PrecoPorUm)


    document.getElementById("Paragrafo").innerHTML = "<p class='texto'> Para efetuar essa compra, você irá precisar de: </p> "
    if (PrecoPorCem > 0) {
        document.getElementById("PrecoPorCem").innerHTML = "<p class='texto'>" + PrecoPorCem + " notas de cem reais. </p> ";
    }

    if (PrecoPorCinquenta > 0) {
        document.getElementById("PrecoPorCinquenta").innerHTML = "<p class = 'texto'> " + PrecoPorCinquenta + " notas de cinquenta reais. </p>";
    }

    if (PrecoPorVinte > 0) {
        document.getElementById("PrecoPorVinte").innerHTML = "<p class='texto'>" + PrecoPorVinte + " notas de vinte reais. </p>";
    }

    if (PrecoPorDez > 0) {
        document.getElementById("PrecoPorDez").innerHTML = "<p class = 'texto'>" + PrecoPorDez + " notas de dez reais. </p>";
    }

    if (PrecoPorCinco > 0) {
        document.getElementById("PrecoPorCinco").innerHTML = "<p class = ' texto'>" + PrecoPorCinco + " notas de cinco reais. </p>";
    }

    if (PrecoPorUm > 0) {
        document.getElementById("PrecoPorUm").innerHTML = "<p class = 'texto'>" + PrecoPorUm + " notas de um real. </p>";
    }
}