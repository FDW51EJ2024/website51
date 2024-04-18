const calificacion = document.getElementById ("calificacion")
const nota = document.getElementById ("nota")
const boton = document.getElementById ("boton")

boton.addEventListener("click", e => {
    e.preventDefault();
    let calif = parseInt(calificacion.value);

    if(calif === 100){
        nota.value = "Excelente";
    }
    
    else if (calif >= 90 && calif <= 99){
        nota.value = "muy bueno";
    }

    else if (calif >= 80 && calif <= 89 ){
        nota.value = "bien";
    }

    else if (calif >= 70 && calif <= 79){
        nota.value = "regular"
    }

    else if (calif >= 60 && calif <= 69){
        nota.value = "terceras"
    }
 
});