const Num1 = document.getElementById("Num1");
const Num2 = document.getElementById("Num2");
const Area = document.getElementById("Area");
const Result = document.getElementById("Result");
const Boton = document.getElementById("btnCalcular");

Boton.addEventListener("click", e =>{
    e.preventDefault();

    let N1 = parseInt(Num1.value);
    let N2 = parseInt(Num2.value);
    let AreaUser = Area.value;

    switch(AreaUser){
    case "Cuadrado": Result.value = N1 * N1;
    break;
        
    case "Triangulo":let r = (N1*N2)/2;
    Result.value=r;
    break;
    default:
            Result.value="Figura no reconocida";
        break;
    }
})