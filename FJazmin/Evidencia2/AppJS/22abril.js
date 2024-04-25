const texto = document.getElementById("texto");
const boton = document.getElementById("boton");
const salida = document.getElementById("salida");

boton.addEventListener("click", e => {
    e.preventDefault();

    let text = texto.value; /* Texto */
    let todasA = 0; /* Contador */
    let indice = 0; /* Indice */

    while(indice < text.length){ /* Length es como usar un mayor que, menor que o igual, es el tamaño de la longitud de los datos que requiere */

        if(text[indice].toUpperCase() == "A"){ /* indice == "a" usar esta forma hara que no funcione, es mejor usar indexing(uno por uno), no usar slicing(mas de uno). Usar toUpperCase es para que no importe si la letra es mayuscula o minuscula  */
            todasA++;
        }
        indice++; /* El indice se debe mover, sino el resultado sera infinito */
    }
    salida.innerHTML = "Total de letras A: " + todasA
});