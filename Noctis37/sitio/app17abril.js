const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const area = document.getElementById("area")
const result = document.getElementById("result")
const boton = document.getElementById("boton")

boton.addEventListener("click", e => {
    e.preventDefault();
    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);
    let areaUser = area.value;
    switch (areaUser) {
        case "cuadrado": result.value = n1 * n1;
            break;
        case "triangulo": let r = (n1 * n2) / 2;
            result.value = r;
            break;
        default:
            result.value = "Figura no valida";
    }
});