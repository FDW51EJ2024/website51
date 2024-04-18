const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");
const btnSumar = document.getElementById("btnSuma");

btnSumar.addEventListener("click", e => {
    e.preventDefault(); 

    let numero1 = parseInt(num1.value);
    let numero2 = parseInt(num2.value);
    
    let res = numero1 + numero2;
    resultado.value = res;
});