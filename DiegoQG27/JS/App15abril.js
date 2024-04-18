const caja = document.getElementById("prueba");
const boton = document.getElementById("btnejecutar");

boton.addEventListener("click", e => {
    e.preventDefault();
    caja.maxLength = 3;
    caja.value = 51;
    caja.style.fontSize = 25;
    caja.style.border = "3px solid blue";
});