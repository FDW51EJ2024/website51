const calificacion = document.getElementById("calificacion");
const nota = document.getElementById("nota");
const ver = document.getElementById("ver");

ver.addEventListener("click", e => {
    e.preventDefault();

    let calif = parseInt(calificacion.value);
    if (calif == 100){
        nota.value = "Excelente";
    }
    else if (calif < 100 && calif > 89){
        nota.value = "Muy bien";
    }
    else if (calif < 90 && calif > 79){
            nota.value = "Bien";
    }
    else if (calif < 80 && calif > 69){
            nota.value = "Regular"
    }
    else if (calif < 70){
            nota.value = "Terceras";
    }
});
