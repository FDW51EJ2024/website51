
const inicio = document.getElementById("inicio");
const fin = document.getElementById("fin");
const boton = document.getElementById("btnver");
const lista = document.getElementById("lista");

boton.addEventListener("click", e => {
    e.preventDefault();
    let ini = parseInt(inicio.value);
    let f = parseInt(fin.value);
    let i = ini;
    lista.innerHTML = "";

    do {
        let isPrime = true;
        let limit = i;
        for (let j = 2; j < limit; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            let item = document.createElement("li");
            item.textContent = i;
            lista.appendChild(item);
        }
        i++;
    } while (i <= f);
});

