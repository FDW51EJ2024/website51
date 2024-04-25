const numero = document.getElementById('numero');
const salida = document.getElementById('salida');
const btnVer = document.getElementById('btnVerificar');

btnVer.addEventListener('click', (e) => {
    e.preventDefault();

    const valor = parseInt(numero.value);

    let esPrimo = true;

    if (valor <= 1) {
        esPrimo = false;
    }
    if (esPrimo) {
        for (let i = 2; i * i <= valor; i++) {
            if (valor % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }
    if (esPrimo) {
        salida.innerHTML = ( valor + "Es primo");
    } else {
        salida.innerHTML = ( valor + "No es primo");
    }
});