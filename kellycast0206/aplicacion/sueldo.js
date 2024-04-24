const Horas = document.getElementById("Horas");
const Pago = document.getElementById("Pago");
const Sueldo = document.getElementById("Sueldo");
const boton = document.getElementById("btnEjecutar");
boton.addEventListener("click", e => {
    e.preventDefault();
    let hrs = parseInt(Horas.value);
    let pagoxhr = parseFloat(Pago.value);

    if(hrs > 40){
        let hrsExtra = hrs - 40;
        let sueldoExtra = hrsExtra * (Pago * 4);
        let sueldoBase = 40 * pagoxhr;
        Sueldo.value= sueldoExtra + sueldoBase;
    }
    else{
        let resultado = hrs * pagoxhr;
        Sueldo.value = resultado;
    }

})

