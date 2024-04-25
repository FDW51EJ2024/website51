const inicioInput = document.getElementById("inicio");
const finInput = document.getElementById("fin");
const boton = document.getElementById("btnVer");
const lista = document.getElementById("lista");

boton.addEventListener("click", e => {
    e.preventDefault();

    let ini = parseInt(inicioInput.value);
    let finn = parseInt(finInput.value);

    mostrarNumerosPrimos(ini, finn);
});

function mostrarNumerosPrimos(inicio, fin) {
    lista.innerHTML = "";
    
    for (let i = inicio; i <= fin; i++) {
        if (esPrimo(i)) {
            let item = document.createElement("li"); 
            item.innerHTML = i;
            lista.appendChild(item);
        }
    }
}

function esPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}