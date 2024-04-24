const calificacion = document.getElementById("calificacion");
const nota = document.getElementById("nota");
const btnresultado = document.getElementById("btnresultado");

btnresultado.addEventListener("click", e => {
    e.preventDefault();
    let cal = parseInt(calificacion.value);

    if (cal === 100) {
        nota.value = "Excelente";
    } 
    else if (cal >= 90 && cal <= 99) {
        nota.value = "Muy bueno";
    } 
    else if (cal >= 80 && cal <= 89) {
        nota.value = "Bien";
    } 
    else if (cal >= 70 && cal <= 79) {
        nota.value = "Regular";
    } 
    else if (cal >= 60 && cal <= 69) {
        nota.value = "Tercera";
    } 
});