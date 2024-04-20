const calificacion = document.getElementById("calif");
const nota = document.getElementById("nota");
const boton = document.getElementById("btnenviar");


boton.addEventListener("click", e =>{
    e.preventDefault();

    let calif = parseInt(calificacion.value);

    if (calif == 100){
        nota.value = "EXCELENTE";
    }else if (calif <= 99 && calif > 89){
        nota.value = "MUY BIEN";
    }else if (calif <= 89 && calif > 79){
        nota.value = "BIEN";
    }else if (calif <= 79 && calif > 69){
        nota.value = "REGULAR";
    }else if (calif < 69){
        nota.value = "TERCERAS";
    }

});