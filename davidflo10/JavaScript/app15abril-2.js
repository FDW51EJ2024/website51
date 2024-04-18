
const horas = document.getElementById("horas");
const pago = document.getElementById("pago");
const sueldo = document.getElementById("sueldo");
const boton = document.getElementById("btncalcular");

boton.addEventListener("click", e => {
    e.preventDefault();

    let hrs = parseInt(horas.value);
    let pagoxhr = parseFloat(pago.value);

    if(hrs > 40){
        let extra = hrs - 40;
        let sueldoextra = extra * (pagoxhr*4);

        let sueldobase = 40 * pagoxhr;
        sueldo.value = sueldoextra;

        sueldo.value = sueldobase + sueldoextra;
    }
    else{
        let res = hrs * pagoxhrs;
        sueldo.value = res;
    }
});