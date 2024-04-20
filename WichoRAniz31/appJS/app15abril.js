/* la caja desde codigo limitarla a que solo acepte 3 caracteres, que si valor sea 51, cambiarle el tamaño de letra a 25 y ponerle borde */
const cajita = document.getElementById("prueba");
const boton = document.getElementById("btnejecutar");

boton.addEventListener("click",e => {
    e.preventDefault();
    cajita.maxLength = 3;
    cajita.value= 51;
    cajita.style.fontSize =25;
    cajita.style.border = "3px solid gray";
});
