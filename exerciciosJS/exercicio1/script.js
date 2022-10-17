function capturar() {
    var calculo = document.getElementById('numero').value;
    document.getElementById('resultado').innerHTML = "O quadrado do número digitado é: " + calculo * calculo;
}