
const calificacion = document.getElementById("calificacion");
const nota = document.getElementById("nota");
const boton = document.getElementById("btnCal");

boton.addEventListener("click",e =>{
    e.preventDefault();
    const calificacionVal = parseInt(calificacion.value);
    
    if (calificacionVal >= 0 && calificacionVal <= 100) {

        if (calificacionVal === 100) {
            nota.value = "Excelente";
        }
        else if (calificacionVal >= 90 && calificacionVal <= 99) {
            nota.value = "Muy bien";
        } 
        else if (calificacionVal >= 80 && calificacionVal <= 89) {
            nota.value = "Bien";
        } 
        else if (calificacionVal >= 70 && calificacionVal <= 79) {
            nota.value = "Regular";
        } 
        else if (calificacionVal >= 0 && calificacionVal <= 69) {
            nota.value = "Mal";
        } 
            
    } else {
        //Mostrar un mensaje de error si la calificación está fuera de rango
       nota.value = "Calificación inválida";
        }
});