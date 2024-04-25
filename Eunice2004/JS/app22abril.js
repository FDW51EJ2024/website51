
const info = document.getElementById("info");
const salida =document.getElementById("salida");
const btn = document.getElementById("btncalcular");

btn.addEventListener("click", e => {
    e.preventDefault();
    let txt =info.value;
    let totalAs = 0;
    let i = 0;

    while(i < txt.length){
       if(txt[i].toUpperCase() == "A" ){
            totalAs ++;
       }
        
        i++;
    }
    salida.innerHTML = "total de letras A: " + totalAs;
});


