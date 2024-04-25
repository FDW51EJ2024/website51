const inicio = document.getElementById("inicio");
const fin = document.getElementById("fin");
const orden = document.getElementById("orden");
const boton = document.getElementById("boton");
const lista = document.getElementById("lista");

boton.addEventListener("click", e => {
    e.preventDefault();

    let start = parseInt(inicio.value);
    let end = parseInt(fin.value);
    let on = orden.value;

    if( on == "A"){
        let contador = start;
        lista.innerHTML = "";
        do{
            let item = document.createElement("li"); /* Si hay una etiqueta de este tipo (li) aun sin tener nada, tiene acceso y puede ser manipulable */
            item.innerHTML = contador;
            lista.appendChild(item); /* Asi se pone dentro de la "caja" hacia html */
            contador++;
        }
        while(contador <= end);
    }
    if( on == "D"){
        let contador = end;
        lista.innerHTML = "";
        do{
            let item = document.createElement("li"); /* Si hay una etiqueta de este tipo (li) aun sin tener nada, tiene acceso y puede ser manipulable */
            item.innerHTML = contador;
            lista.appendChild(item); /* Asi se pone dentro de la "caja" hacia html */
            contador--;
        }
        while(contador >= start);
    }

});