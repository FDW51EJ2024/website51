const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const area = document.getElementById("area");
const resultado = document.getElementById("resultado");
const btnresultado = document.getElementById("btnresultado");

btnresultado.addEventListener("click", e => {
    e.preventDefault();
    let nume1 = parseInt(num1.value);
    let nume2 = parseInt(num2.value);
    let areauser = area.value;

    switch(areauser){
        case "cuadrado": resultado.value = nume1 * nume1;
        break;
        case"triangulo":
        let r = (nume1 * nume2)/2;
        resultado.value = r;
        break;
        default:
            resultado.value = "figura no valida"
    }
})