// Desafio 3

function ordenação(){

    let array = []
    let input = $("#array").val()
    let foco = $("#valor-foco").val()
    
    console.log(input)

    input = input.split(",")

    input.map((val)=>{
        array.push(Number(val))
    })


    array = array.sort()





    console.log(array)
    let focoResult =input.indexOf(foco) + 1

    if(focoResult == 0){
        focoResult = "Esse valor não existe na sua sequência"
    }

    let p = $("#resultado3").html(`Ordenados de forma crescente ${array} <br> O numero de ${foco} está na ${focoResult} º`)

    
    
    

}