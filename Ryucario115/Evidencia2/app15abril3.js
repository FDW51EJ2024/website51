
const Calificacion = document.getElementById("Calificacion")
const Note = document.getElementById("Note")
const boton = document.getElementById("btnCalcular")

boton.addEventListener("click",e =>{
    e.preventDefault();

    let Grade = parseInt(Calificacion.value)

    if(Grade == 100){
        Note.value = "Exelente";
    }
    else if (Grade >= 90 && Grade <=99 ){
        Note.value = "Muy bien";
    }
    else if (Grade >= 80 && Grade <=89){
        Note.value = "Bien";
    }
    else if (Grade >= 70 && Grade <=79){
        Note.value = "Regular";
    }
    else{
        Note.value = "Reprobado";
    }
})