const calificacionInput = document.getElementById("calificacion");
const notaInput = document.getElementById("nota");
const botonCalcular = document.getElementById("btnCalcular");

botonCalcular.addEventListener("click", e => {
    e.preventDefault();

    let calificacion = parseFloat(calificacionInput.value);
    let nota = "";

    if (calificacion >= 90) {
        nota = "Excelente";
    } else if (calificacion >= 80) {
        nota = "Muy bien";
    } else if (calificacion >= 70) {
        nota = "Bien";
    } else if (calificacion >= 60) {
        nota = "Regular";
    } else {
        nota = "Terceras";
    }

    notaInput.value = nota;
});
