const horas = document.getElementById("horas");
const pagoxhoras = document.getElementById("pagoxhora");
const sueldo = document.getElementById("sueldo");
const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", e => {
    e.preventDefault();

    let horas_trabajadas = parseInt(horas.value);
    let pago_por_hora = parseFloat(pagoxhoras.value);

    if (horas_trabajadas > 40) {
        let horas_extra = horas_trabajadas - 40;
        let sueldo_extra = horas_extra * (pago_por_hora * 4);
        let sueldo_base = 40 * pago_por_hora;

        sueldo.value = sueldo_base + sueldo_extra;
    }
    else {
        let sueldo_total = horas_trabajadas * pago_por_hora;

        sueldo.value = sueldo_total;
    }
});