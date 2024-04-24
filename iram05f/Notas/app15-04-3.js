const calif = document.getElementById('calif');
const nota = document.getElementById('nota');
const boton = document.getElementById('btnnota');

boton.addEventListener("click", e => {
    e.preventDefault();

    // Obtener la calificación ingresada por el usuario y convertirla a un número entero
    const calificacion = parseInt(calif.value);

    // Verificar en qué rango se encuentra la calificación y asignar la nota correspondiente
    if (calificacion === 100) {
        nota.value = "Excelente";
    } else if (calificacion >= 90 && calificacion <= 99) {
        nota.value = "Muy bien";
    } else if (calificacion >= 80 && calificacion <= 89) {
        nota.value = "Bien";
    } else if (calificacion >= 70 && calificacion <= 79) {
        nota.value = "Regular";
    } else if (calificacion >= 0 && calificacion <= 69) {
        nota.value = "Terceras";
    } else {
        // Si la calificación no está dentro de los rangos especificados
        nota.value = "Calificación fuera de rango";
    }
});