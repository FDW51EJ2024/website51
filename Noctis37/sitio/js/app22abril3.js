document.addEventListener("DOMContentLoaded", function() {
    const inicio = document.getElementById("inicio");
    const fin = document.getElementById("fin");
    const boton = document.getElementById("btnVer");
    const lista = document.getElementById("lista");

    boton.addEventListener("click", e => {
        e.preventDefault();

        let In = parseInt(inicio.value);
        let F = parseInt(fin.value);

        lista.innerHTML = "";

        let num = In;
        do {
            let Primo = true;
            if (num <= 1) {
                Primo = false;
            } else {
                for (let i = 2; i <= Math.sqrt(num); i++) {
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
        } while (num <= F);
    });
});
