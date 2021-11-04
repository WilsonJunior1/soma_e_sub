let div1 = document.querySelector("#input-n1")
let div2 = document.querySelector("#somaousub")
let div3 = document.querySelector("#input-n2")
let btn1 = document.querySelector("#firstnum")
let btn2 = document.querySelector("#somaousubbtn")
let btn3 = document.querySelector("#second")
let refresh = document.querySelector("#refresh")

let first_value = ""
let second_value = ""
let soma_ou_sub = ""
let resuldiv = document.querySelector("#resul")
let resul = document.querySelector("#resultado")



btn1.addEventListener("click", function(){
    first_value = parseInt(document.querySelector("#first-value").value)
    div1.style.display = "none"
    div2.style.display = "flex"

    return first_value;
})

btn2.addEventListener("click", function(){
    let soma_ou_sub_input =  document.querySelector("#soma-ou-sub").value.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"")
    
    if(soma_ou_sub_input == "SOMA" || soma_ou_sub_input == "SUBTRACAO"){
        div2.style.display = "none"
        div3.style.display = "flex"
        soma_ou_sub = soma_ou_sub_input
        return soma_ou_sub;
    }else{
        alert("Digite apenas 'Soma' ou 'Subtração'")
        soma_ou_sub_input = "";
    }
    
})

btn3.addEventListener("click", function(){
    second_value =  parseInt(document.querySelector("#second-value").value)
    resul.innerHTML += `${calcular(first_value, second_value, soma_ou_sub)}`
    div3.style.display = "none"
    resuldiv.style.display = "flex"
    
    return second_value;
    
})


refresh.addEventListener("click", function(){
    location.reload();
})

function calcular(num1, num2, operacao){
    let resultado = 0

    if(operacao === "SOMA"){
        resultado = num1 + num2
    }else{
        resultado = num1 - num2
    }

    return resultado
}



