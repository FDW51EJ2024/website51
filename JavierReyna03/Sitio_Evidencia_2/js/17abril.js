const numero1 = document.getElementById("num1");
const numero2 = document.getElementById("num2");
const tipocal = document.getElementById("tipo");
const res = document.getElementById("resultado");
const btncal = document.getElementById("calcular");

btncal.addEventListener("click", e => {
    e.preventDefault();

    let n1 = parseInt(numero1.value);
    let n2 = parseInt(numero2.value);
    let tp = tipocal.value;

    switch (tp) {
        case "Cuadrado" :
            res.value = n1 * n1;
        break;

        case "Triangulo" :
            res.value = (n1 * n2)/2;
        break;

        default:
            res.value = "Figura no Valida";
        break;
    }
});