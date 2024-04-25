const inicio = document.getElementById("inicio");
const fin = document.getElementById("fin");
const boton = document.getElementById("btnver");
const lista = document.getElementById("lista");

boton.addEventListener("click", e => {
    e.preventDefault();
    let ini = parseInt(inicio.value);
    let f = parseInt(fin.value);
    function esPrimo(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;

        if (num % 2 === 0 || num % 3 === 0) return false;

        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }

        return true;
    }

    lista.innerHTML = "";
    for (let i = ini; i <= f; i++) {
        if (esPrimo(i)) {
            let item = document.createElement("li");
            item.textContent = i;
            lista.appendChild(item);
        }
    }
});
