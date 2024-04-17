const calif = document.getElementById("calificaciones");
const Note = document.getElementById ("nota");
const boton = document.getElementById("btnVer");


boton.addEventListener ("click", e =>{
    e-preventDefault();
    let calf = parseInt(calif.value);

    if (calf = 100){
        Note-value = "Excelente";
    }

    else if(calf >=90 && calf <=99) {
        Note value = "Muy Bien";
    }

    else if(calf >=80 && calf <=89) {
        Note.value = "Bien";
    }

})

