
const cajita = document.getElementById("prueba");
const boton = document.getElementById("btnEjecutar");

boton.addEventListener("click",e => {
    e.preventDefault();
    cajita.maxLength = 3;
    cajita.value = 51;
    cajita.style.fontSize = 25;
    cajita.style.border = "5px solid green";
    boton.style.backgroundColor = "White"
    boton.style.border = "0px solid white"
    boton.style.fontFamily = "Console"
});
