/* Crear las referencias a los objetos que seran
programados */

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const Suma = document.getElementById("Suma");
const btnSumar = document.getElementById("btnSumar");

btnSumar.addEventListener("click", e => {
    e.preventDefault();
    console.log("Hola");


    /* codigo para sumar */
    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);

    let s = n1 + n2;

    Suma.value = s ;


});
