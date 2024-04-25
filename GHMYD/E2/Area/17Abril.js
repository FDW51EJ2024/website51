const num1 =document.getElementById("num1");
const num2 =document.getElementById("num2")
const area =document.getElementById("area")
const resultado =document.getElementById("resultado")
const boton =document.getElementById("btnEnviar")

boton.addEventListener("click", e => {
    e.preventDefault();

    let n1 = parseInt(num1.value)
    let n2 = parseInt(num2.value)
    let areaUser = area.value 
    
    switch(areaUser) {
//como se agrega .upper ?
        case "cuadrado": 
        resultado.value = n1 * n1;
        break;
        case "triangulo": 
        let r = (n1 * n2) / 2;
        resultado.value = r;
        break;
        default:
            resultado.value = "Figura no valida";
        break;
    }
})