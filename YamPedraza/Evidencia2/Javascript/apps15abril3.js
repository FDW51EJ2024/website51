
const calificacion = document.getElementById("calificacion");
const nota = document.getElementById("nota");
const boton = document.getElementById("btnEnviar");


boton.addEventListener("click", e => {
    e.preventDefault();

    let cal = parseInt(calificacion.value);

    if (cal >= 100) {
        nota.value = "Excelente";
    }
    else if (cal >= 90 && cal <= 99) {
        nota.value = "Muy bien";
    }
    else if (cal >= 80 && cal <= 89) {
        nota.value = "Bien";
    }
    else if (cal >= 70 && cal <= 79) {
        nota.value  = "Regular";
    }
    else if (cal >= 0 && cal <= 69) {
        nota.value  = "Terceras";
    }
    else {
        nota.value = "Calificacion no valida";
    }

});


