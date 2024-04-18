const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const area = document.getElementById("area")
const resultado = document.getElementById("resultado")
const btnCalcular = document.getElementById("btnCalcular")

btnCalcular.addEventListener("click", e => {
    e.preventDefault();
    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);

    let areaUser = area.value

    switch(areaUser){
        case "cuadrado":
             resultado.value = n1*n1
            break;
        case "triangulo": 
            resultado.value = (n1 * n2)/2;
            break;
        default: resultado.value = 
            "Ingrese calculo valido";
    }
})