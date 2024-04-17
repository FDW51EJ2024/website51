const califInput = document.getElementById("Calificacion")
const note = document.getElementById("Nota")
const boton = document.getElementById("btnVer")

boton.addEventListener("click",e => {
    e.preventDefault();

    let calif = parseFloat(califInput.value);

    if(calif === 100){
         note.value = ("Excelente")
    }

    else if(calif >= 90.00 && calif <= 99.99){
         note.value = ("Muy bien")
    }

    else if(calif >= 80.00 && calif <= 89.99){
         note.value = ("Bien")
    }

    else if(calif >= 70.00 && calif <= 79.99){
         note.value = ("Regular")
    }

    else if (calif <= 69.99){
        note.value = ("Terceras")
    };

});