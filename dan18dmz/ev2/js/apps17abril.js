const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const area = document.getElementById("area");
const resultado = document.getElementById("resultado");
const btncalcular = document.getElementById("btncalcular");

btncalcular.addEventListener("click", e => {
    e.preventDefault();
    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);
    let a = area.value;

    switch (a) {
        case "triangulo":
            let op1 = (n1 * n2) / 2;
            resultado.value = op1;
            break;
        case "cuadrado":
            let op2 = n1 * n2;
            resultado.value = op2;
            break;
        default:
            resultado.value = "Valor de área no válido";
            break;
    }
});