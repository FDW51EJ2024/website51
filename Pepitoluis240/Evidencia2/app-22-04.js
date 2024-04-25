/* Mandar datos a la consola: console.log(dato);

Mandar datos a un input: cajaSalida.value=data;

Mandar datos a una etiqueta (contenedor): divInfo.innerHTML= dato;

<div id="divInfo">
<div>

Mostrar datos en una lista agregando li como elementos.

innerHTML               <ul id="lista">
appendChild()               <li> LTI </li>
createElement()
*/

const texto = document.getElementById("texto");
const btn = document.getElementById("btnCalcular");
const salida = document.getElementById("salida");

btn.addEventListener("click", e => {
    e.preventDefault();

    let txt = texto.value;
    let totalAs = 0;
    let i = 0;
[]
    while(i < txt.length){
        if( txt[i].toUpperCase() == "A"){
            totalAs++;
        }
        i++;
    }
    salida.innerHTML = "Total de letras A: " + totalAs;
});