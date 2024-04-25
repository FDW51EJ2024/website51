const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const fig = document.getElementById("fig")
const resultado = document.getElementById("res")
const btnCalc = document.getElementById("btnS")

btnCalc.addEventListener("click", e => {
    e.preventDefault();
    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);

    let Fig = fig.value

    switch(Fig){
        case "cuadrado":
             resultado.value = n1*n1;
            break;
        case "triangulo": 
            resultado.value = (n1 * n2)/2;
            break;
        default: resultado.value = "No hubo respuesta valida";
    }

})