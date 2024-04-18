const cajita = document.getElementById("cajita");
const boton = document.getElementById("btnenviar");

boton.addEventListener("click", e => {
    e.preventDefault();
    cajita.maxLength = 3;
    cajita.style.fontSize= "25px";
    cajita.style.border = "4px solid green";
})