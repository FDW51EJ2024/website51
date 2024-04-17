
const calificacion = document.getElementById("calificacion");
const nota = document.getElementById("nota");
const boton = document.getElementById("btnNota");

boton.addEventListener("click", e => {
    e.preventDefault();

    let numero = parseInt(calificacion.value);

    if (numero == 100){
        nota.value = "¡Excelente!";
    }
    else if(numero >= 90 && numero <= 99){
        nota.value = "¡Muy bien!";
    }
    else if(numero >= 80 && numero <= 89){
        nota.value = "¡Bien!";
    }
    else if(numero >= 70 && numero <= 79){
        nota.value = "Regular";
    }
    else{
        nota.value = "¡Reprobado!";
    }
})