var nomes = [];

function adicionar() {
    var input = document.querySelector("#nome");

    if (input.value == '') {
        return false;
    }
    else {
        nomes.push(input.value);
        input.value = '';
    }
}

function printar() {
    var resultado = document.querySelector("#resultado");

    resultado.innerHTML = nomes.reverse();
}