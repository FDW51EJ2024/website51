const texto = document.getElementById("texto");
const btnCalcular = document.getElementById("btnCalcular");
const salida = document.getElementById("salida");

btnCalcular.addEventListener("click", e => {
    e.preventDefault();
    let txt = texto.value;
    let totalAs = 0;
    let i = 0;

    while(i < txt.length){
        if( txt[i].toUpperCase() == "A"){
            totalAs++;
        }
        i++;
    }
    salida.innerHTML = "Total de letras A: " + totalAs; 
});