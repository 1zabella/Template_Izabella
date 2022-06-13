function calculo( ){
	let numero1 = document.getElementById("numero1").value;
	let numero2 = document.getElementById("numero2").value;
	let soma = (numero1 + numero2);
	document.getElementById("resultado").innerHTML = "<p class = 'text'> O resultado da soma dos dois valores é igual a: " + soma + "</p>";
}
