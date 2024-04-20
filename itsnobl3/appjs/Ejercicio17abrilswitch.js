const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const area = document.getElementById("area")
const resultado = document.getElementById("resultado")
const btnresultado = document.getElementById("btnresultado")

btnresultado.addEventListener("click", e => {
    e.preventDefault();
    let numero1 = parseInt(num1.value);
    let numero2 = parseInt(num2.value);
    let areauser = area.value;

    switch(areauser){
        case "cuadrado" : resultado.value = numero1 * numero1;
        break;
        case "triangulo": 
        let r =(numero1 * numero2)/2;
        resultado.value = r;
        break;
        default:
            resultado.value = "figura no valida"
    }
});
