const texto = document.getElementById("texto");
const btn = document.getElementById("btnCalcular");
const salida = document.getElementById("salida");

btn.addEventListener("click", e => {
    e.preventDefault();
    const txt = texto.value; 
    let totalA = 0;
    let i = 0;

    while(i < txt.length){
        if(txt[i].toUpperCase() === "A"){
            totalA++;
        }
        i++;
    }
    salida.innerHTML = "Total de letras A: " + totalA;
});
