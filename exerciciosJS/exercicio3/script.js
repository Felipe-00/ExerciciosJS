var maior = [];
var menor = [];

function adicionar() {
    var input = document.querySelector("#idade");

    if (input.value == '') {
        return false;
    }
    else if (parseInt(input.value) >= 18) {
        maior.push(parseInt(input.value));
        input.value = '';
    }
    else if (parseInt(input.value) < 18) {
        menor.push(parseInt(input.value));
        input.value = '';
    }
}

function verificar() {
    var resultado = document.querySelector("#resultado");


    resultado.innerHTML = "Maiores de idade: " + maior + "<br>" +
        "Menores de idade: " + menor;
}