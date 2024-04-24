const horas = document.getElementById("horas")
const pago = document.getElementById("pago")
const sueldo = document.getElementById("sueldo")
const boton = document.getElementById("btncalcular")

boton.addEventListener("click", e => {
    e.preventDefault();

    let hrs = parseInt(horas.value);
    let pagoo =parseInt(pago.value);

    if(hrs > 40) {
        let hrsex = hrs - 40;
        let sdoex = hrsex * (pagoo * 4);
        let sueldob = 40 * pagoo;
        let sueldocom = sueldob + sdoex;
        sueldo.value = sueldocom;
    }
    else {
        let res = hrs * pagoo;
        sueldo.value = res;
    }

    console.log("hola");

})