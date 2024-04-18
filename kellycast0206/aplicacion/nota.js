const nota = document.getElementById("nota");
const calif= document.getElementById("calif");
const boton = document.getElementById("btnEjecutar");
boton.addEventListener("click", e => {
    e.preventDefault();

    let c = parseInt(calif.value)
    if(c === 100){        
        nota.value = "Exelente"
    }
    else 
        if (c >= 90 && c <= 99){
            nota.value = "Muy bien"
        }
        else
            if (c >= 80 && c <= 89){
                nota.value = "Bien"
            }
            else
                if (c >= 70 && c <= 79){
                    nota.value = "Regular"
                }
                else
                    if (c >= 0 && c <= 69){
                        nota.value = "Terceras"
                    }
})