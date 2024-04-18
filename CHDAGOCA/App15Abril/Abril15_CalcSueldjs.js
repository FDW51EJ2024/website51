const horas = document.getElementById("horas");
const pagoh = document.getElementById("pagoh");
const sueldo = document.getElementById("sueldo");
const btnCalc = document.getElementById("btnCalc");

btnCalc.addEventListener("click", e => {
    e.preventDefault();

    let horas_lab = parseInt(horas.value);
    let PagoXh = parseFloat(pagoh.value);

    if (horas_lab > 40) {
        let extra = horas_lab - 40;
        let hExtra = extra * PagoXh * 4;
        let sueldo_base = 40 * PagoXh;

        sueldo.value = sueldo_base + hExtra;
    }
    else {
        let sueldoa = horas_lab * PagoXh;

        sueldo.value = sueldoa;
    }
});