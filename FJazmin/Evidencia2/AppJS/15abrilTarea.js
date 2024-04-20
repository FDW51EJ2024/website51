const califiacion = document.getElementById("calificacion");
const nota = document.getElementById("nota");
const boton = document.getElementById("boton");

boton.addEventListener("click", e=> {
    e.preventDefault();

    let calif = parseInt(califiacion.value);

    if(calif == 100){
        nota.value = "¡Exelente!"
    }
    else if (calif >= 90 && calif <= 99) {
        nota.value = "Muy bien";
    }
    else if (calif >= 80 && calif <= 89) {
        nota.value = "Bien";
    }
    else if (calif >= 70 && calif <= 79) {
        nota.value = "Regular";
    }
    else if (calif >= 0 && calif <= 69) {
        nota.value = "Terceras directas:(";
    }
    else {
        nota.value = "Calificación no válida";
    }
});