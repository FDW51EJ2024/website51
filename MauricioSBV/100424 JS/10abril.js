
/*Se crean las referencias hacia las etiquetas del index*/
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");
const btnSumar = document.getElementById("btnSuma");

/*Se programa la acción que se ejecutará al hacer click en el botón*/
btnSumar.addEventListener("click", e => {
    e.preventDefault();
    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);
    let res = n1 + n2;
    resultado.value = res;
});