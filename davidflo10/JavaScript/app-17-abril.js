const num1 = document.getElementById ("num1")
const num2 = document.getElementById ("num2")
const area = document.getElementById ("area")
const resultado = document.getElementById ("resultado")
const boton = document.getElementById ("boton")

boton.addEventListener ("click", e => {
    e.preventDefault();
    let nu1 = parseInt(num1.value);
    let nu2 = parseInt (num2.value);
    let areauser = area.value;
    switch (areauser){
        case "cuadrado": resultado.value = nu1*nu1;
                         break;
        case "triangulo": let r = (nu1*nu2)/2;
                          resultado.value = r;
                         break;
        default: resultado.value = "Figura no Valida";
    }
});