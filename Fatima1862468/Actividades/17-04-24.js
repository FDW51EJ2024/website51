const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const area = document.getElementById("area");
const result = document.getElementById("resultado");
const boton = document.getElementById("btncalcular")

boton.addEventListener("click", e =>{
    e.preventDefault();

    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);
    let areauser = area.value;

    switch(areauser){
        case "TRIANGULO":
            result.value = n1 * n2 / 2;
        break;
        case "CUADRADO":
            result.value = n1 * n2;
        break;
        default:
            result.value = "el dato es invalido";
        break;
    }
})