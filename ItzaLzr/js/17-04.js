const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const area = document.getElementById("area");
const resultado = document.getElementById("resultado");
const boton = document.getElementById("btncalcular");

boton.addEventListener("click", e => {
    e.preventDefault();
    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);
    let areauser = area.value; /*area no lleva parseInt ya que es textual */

    switch(areauser){
        case "cuadrado":/*directo */
            resultado.value = n1 * n2;
            break;
        case "triangulo":/*con variable: r */
            let r = (n1 * n2)/2;
            resultado.value = r;
            break;
        default:
            resultado.value = "No se reconoció, valor no válido";
            break;
    }
});