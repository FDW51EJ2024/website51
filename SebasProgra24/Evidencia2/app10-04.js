/* crear referencias a los objetos que serán programados*/

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const suma = document.getElementById("suma");
const btnsumar = document.getElementById("btnsumar");

/*Hacer que el boton reaccione al click en la pantalla*/

btnsumar.addEventListener("click", e => {
    e.preventDefault();         /*Para hacer que el botón se reaccione con lo normal, no borre lo que tiene por default, porque así es la naturaleza del botón*/
    

    /* Codigo para sumar */
    let n1 = parseInt(num1.value); /* el .value saca el valor dentro de la caja num1*/
    let n2 = parseInt(num2.value);

    let s = n1 + n2;

    suma.value = s;      /*En la caja de la suma se agrega el valor de s */

});
