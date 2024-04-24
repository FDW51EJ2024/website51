


const inicio = document.getElementById("inicio");
const fin = document.getElementById("fin");
const btnVer = document.getElementById("btn_ver");
const lista = document.getElementById("lista");

btnVer.addEventListener("click", e=> {
    e.preventDefault(); // Evitar el comportamiento por defecto del botón (enviar formulario)

    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos

    let ini = parseInt(inicio.value);
    let f = parseInt(fin.value);

    for (let num = ini; num <= f; num++) {
        let esPrimo = true;
        if (num <= 1) {
            esPrimo = false;
        } else {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    esPrimo = false;
                    break;
                }
            }
        }
        if (esPrimo) {
            let item = document.createElement("li");
            item.textContent = num;
            lista.appendChild(item);
        }
    }
});