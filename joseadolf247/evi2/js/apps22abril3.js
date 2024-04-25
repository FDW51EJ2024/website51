/*es primo si solamente tiene 2 divisores
1 y el mismo numero EJEMPLO: 3, 5, 7
if(numero%1==0 && numero%numero==0) NO JALA*/
const inicio = document.getElementById("inicio");
const fin = document.getElementById("fin");
const boton = document.getElementById("btnVer");
const lista = document.getElementById("lista");

boton.addEventListener("click", e => {
    e.preventDefault();
    let ini = parseInt(inicio.value);
    let f = parseInt(fin.value);
    let i = ini;
    lista.innerHTML = "";

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
            lista.appendChild(item);
        }
        i++;
    } while (i <= f);
});