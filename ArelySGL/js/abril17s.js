const calificacion = document.getElementById("calificacion");
const nota = document.getElementById("nota");
const boton = document.getElementById("btnCal");

boton.addEventListener("click", e => {
    e.preventDefault();
    const calificacionVal = parseInt(calificacion.value);
    
    switch (true) {
        case calificacionVal === 100:
            nota.value = "Excelente";
            break;
        case calificacionVal >= 90 && calificacionVal <= 99:
            nota.value = "Muy bien";
            break;
        case calificacionVal >= 80 && calificacionVal <= 89:
            nota.value = "Bien";
            break;
        case calificacionVal >= 70 && calificacionVal <= 79:
            nota.value = "Regular";
            break;
        case calificacionVal >= 0 && calificacionVal <= 69:
            nota.value = "Mal";
            break;
        default:
            nota.value = "Calificación inválida";
            break;
    }
});
