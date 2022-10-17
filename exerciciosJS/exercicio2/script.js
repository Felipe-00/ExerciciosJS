var numeros = [];

function adicionar() {
    var numero = document.querySelector("#numero");

    if (numero.value == '') {
        return false;
    }
    else {
        numeros.push(parseFloat(numero.value));
        numero.value = '';
    }
}

function verificar() {
    var resultado = document.querySelector("#resultado");

    const maxValue = numeros.reduce(function (prev, current) {
        return prev > current ? prev : current;
    });

    resultado.innerHTML = "O maior número digitado foi: " + maxValue;
}