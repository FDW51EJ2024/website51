/* Referenciar objetos que serán programados  */
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const suma = document.getElementById("suma");
const boton = document.getElementById("boton");

boton.addEventListener("click", e => {
    e.preventDefault();

    /*codigo para sumar*/
    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);
    let s = n1 + n2;

    suma.value = s ;
});
