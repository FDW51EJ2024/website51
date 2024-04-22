/* es primo si solamente tiene 2 divisores <1 y el mismo numero> */

/* cuenta As while */
/* generar nums */
/* primos*/

const inicio = document.getElementById("inicio");
const fin = document.getElementById("fin");
const boton = document.getElementById("btnVer");
const lista = document.getElementById("lista");

boton.addEventListener("click", e => {
    e.preventDefault();

    let ini = parseInt(inicio.value);
    let f = parseInt(fin.value);

    lista.innerHTML = "";

    let num = ini;
    do {
        let Primo = true;
        if (num <= 1) {
            Primo = false;
        } else {
            for (let i = 2; i * i <= num; i++) {
                if (num % i === 0) {
                    Primo = false;
                    break;
                }
            }
        }

        if (Primo) {
            let item = document.createElement("li");
            item.textContent = num;
            lista.appendChild(item);
        }

        num++;
    } while (num <= f);
});
