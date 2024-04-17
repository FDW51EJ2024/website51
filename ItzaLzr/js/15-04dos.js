const horas = document.getElementById("horas");
const pago = document.getElementById("pago");
const sueldo = document.getElementById("sueldo");
const boton = document.getElementById("btnCalcular");

boton.addEventListener("click", e => {
    e.preventDefault();

    let hrs = parseInt(horas.value); 
    let pagoxhr = parseFloat(pago.value);

    if (hrs > 40){
        let hrsExtra = hrs-40;
        let sueldoExtra = hrsExtra * (pagoxhr *4)
        let sueldoBase = 40 * pagoxhr;
        sueldo.value = sueldoBase + sueldoExtra;
        
    }
    else{
        let res = hrs * pagoxhr;
        sueldo.value = res;
    }

})
