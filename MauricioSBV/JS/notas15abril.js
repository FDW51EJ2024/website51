const calificacion = document.getElementById("calificacion");
const nota = document.getElementById("nota");
const botonVer = document.getElementById("btnVer");

botonVer.addEventListener("click", () => {
    
    let calif = parseInt(calificacion.value);

    if (calif == 100) {
        nota.value = "Excelente";
    } else if (calif >= 90 && calif <= 99) {
        nota.value = "Muy bien";
    } else if (calif >= 80 && calif <= 89) {
        nota.value = "Bien";
    } else if (calif >= 70 && calif <= 79) {
        nota.value = "Regular";
    } else if (calif <= 69) {
        nota.value = "Segundas papá";
    }
});