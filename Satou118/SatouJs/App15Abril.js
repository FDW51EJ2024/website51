const caja = document.getElementById("prueba");
const boton = document.getElementById("btnEjecutar")

boton.addEventListener("click", e => {
    e.preventDefault();
    caja.maxLenght = 3;
    caja.value = 51;
    caja.style.fontsize = 25;
    caja.style.border = "5px solid red"
})
