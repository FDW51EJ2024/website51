
const caja = document.getElementById("prueba")
const boton = document.getElementById("btnEjecutar")

boton.addEventListener("click",e => {
    e.preventDefault();
    caja.maxLenght = 3;
    caja.value = 51;
    caja.style.fontSize = 25;
    caja.style.border = "3px solid gray";

});