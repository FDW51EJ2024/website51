const calificacion = document.getElementById("calificacion");
const nota = document.getElementById("nota");
const boton = document.getElementById("btnCalcular");

boton.addEventListener("click", e => {
    e.preventDefault();

    let cali = parseInt(calificacion.value);
    if(cali<=69){
        nota.value = "Terceras";
    }
    else if(cali>=70 && cali<=79){
        nota.value = "Regular";
    }
    else if(cali>=80 && cali<=89){
        nota.value = "Bien";
    }
    else if(cali>=90 && cali<=99){
        nota.value = "Muy Bien";
    }
    else{
        nota.value = "Excelente";
    }
});