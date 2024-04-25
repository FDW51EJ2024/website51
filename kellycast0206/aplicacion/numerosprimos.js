const numero = document.getElementById('numero');
const salida = document.getElementById('salida');
const btnVer = document.getElementById('btnVerificar');

btnVer.addEventListener('click', (e) => {
    e.preventDefault();

    const valor = parseInt(numero.value);

    let Primo = true;

    if (valor <= 1) {
        Primo = false;
    }
    if (Primo) {
        for (let i = 2; i * i <= valor; i++) {
            if (valor % i === 0) {
                Primo = false;
                break;
            }
        }
    }
    if (Primo) {
        salida.innerHTML = ( valor + "Este valor es primo");
    } else {
        salida.innerHTML = ( valor + "Este valor no es primo");
    }
});