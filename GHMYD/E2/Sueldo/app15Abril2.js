
const horas = document.getElementById("horas");
const pagoxH = document.getElementById("pagoxH");
const sueldo = document.getElementById("sueldo");
const boton = document.getElementById("btnCalcular");

boton.addEventListener("click",e => {
    e.preventDefault();

    let hrs = parseInt(horas.value);
    let pago = parseFloat(pagoxH.value);
    
    if(hrs > 40){
        let hrsExtra = hrs - 40;
        let sueldoExtra = hrsExtra * (pago * 4);
        let sueldoBase = 40 * pago; 

        sueldo.value = sueldoBase + sueldoExtra
    }
    else{
        let resultado = hrs * pago;
        sueldo.value = resultado;
    }
})