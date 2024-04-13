// appkells.js

// Asociar el evento clic al botón de suma cuando se carga la página
window.onload = function() {
    var botonSuma = document.getElementById('suma');
    botonSuma.onclick = sumar;
}

function sumar() {
    // Obtener los valores de los campos de texto
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);

    // Verificar si los valores ingresados son números
    if (!isNaN(num1) && !isNaN(num2)) {
        // Calcular la suma
        var suma = num1 + num2;

        // Mostrar el resultado en el campo de resultado
        document.getElementById('resultado').value = suma;
    } else {
        // Mostrar un mensaje de error si los valores ingresados no son números
        alert('Por favor, ingresa números válidos.');
    }
}
