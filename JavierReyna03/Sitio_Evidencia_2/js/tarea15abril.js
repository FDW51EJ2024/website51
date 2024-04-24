/*
100 excelente
90 - 99 muy bien
80 - 89 bien
70 - 79 regular
0 - 69  terceras

*/

const calificacion = document.getElementById("calif");
const not = document.getElementById("nota");
const boton = document.getElementById("btnsi");

boton.addEventListener("click", e => {
    e.preventDefault();
    let cal = parseInt(calificacion.value);

    if(cal == 100){
        not.value = "Excelente";
    }

    else if(cal >= 90 && cal <= 99 ){
        not.value = "Muy bien";
    }

    else if(cal >= 80 && cal <= 89 ){
        not.value = "Bien";
    }

    else if(cal >= 70 && cal <= 79 ){
        not.value = "Regular";
    }

    else if(cal >= 0 && cal <= 69 ){
        not.value = "Terceras";
    }

});