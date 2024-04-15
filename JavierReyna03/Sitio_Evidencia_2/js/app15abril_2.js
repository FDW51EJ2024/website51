const horas = document.getElementById("horas");
const pago = document.getElementById("pago");
const sueldo = document.getElementById("sueldo");
const boton = document.getElementById("btncalcular");

boton.addEventListener("click", e => {
    e.preventDefault();

    let hrs = parseInt(horas.value);
    let pagoxhrs = parseFloat(pago.value);

    if(hrs > 40){
        let hrsExtra = hrs - 40;
        let sueldoextra = hrsExtra * (pagoxhrs*4);

        let sueldobase = 40 * pagoxhrs;


        sueldo.value = sueldobase + sueldoextra;

    }
    else{
        let res = hrs * pagoxhrs;
        sueldo.value = res;
    }
});