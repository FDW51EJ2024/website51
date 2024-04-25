const inicio = document.getElementById("inicio");
const fin = document.getElementById("fin");
const boton = document.getElementById("btnVer");
const list = document.getElementById("list");

boton.addEventListener("click", e => {
    e.preventDefault();
    let ini = parseInt(inicio.value);
    let f = parseInt(fin.value);
    let i = ini;
    list.innerHTML = "";

    do {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            let item = document.createElement("li");
            item.innerHTML = i;
            list.appendChild(item);
        }
        i++;
    } while (i <= f);
});