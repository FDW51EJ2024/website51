
const calificacion = document.getElementById("calificacion");
const nota = document.getElementById("nota");
const btnver = document.getElementById("btnver");

btnver.addEventListener("click", e => {
    e.preventDefault();

    let score = parseInt(calificacion.value);

    if (score === 100) {
        nota.value = "Excelente";
    } 
    else if (score >= 90 && score <= 99) {
        nota.value = "Muy bueno";
    } 
    else if (score >= 80 && score <= 89) {
        nota.value = "Bien";
    } 
    else if (score >= 70 && score <= 79) {
        nota.value = "Regular";
    } 
    else if (score >= 60 && score <= 69) {
        nota.value = "Segundas";
    } 
});