const calificacion = document.getElementById("calificacion");
const nota = document.getElementById("nota");
const ver = document.getElementById("ver");

ver.addEventListener("click", e => {
    e.preventDefault();

    let calif = parseInt(calificacion.value);
    switch(true) {
        case (calif === 100):
            nota.value = "¡Espléndido!";
            break;
        case (calif < 100 && calif > 89):
            nota.value = "Muy bien hecho";
            break;
        case (calif < 90 && calif > 79):
            nota.value = "Bien hecho";
            break;
        case (calif < 80 && calif > 69):
            nota.value = "Puedes mejorar";
            break;
        default:
            nota.value = "Necesitas esforzarte más";
    }
});
