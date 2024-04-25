const inicio = document.getElementById("inicio");
const fin = document.getElementById("fin");
const boton = document.getElementById("btn");
const lista = document.getElementById("lista");

boton.addEventListener("click", e => {
    e.preventDefault();

    let ini = parseInt(inicio.value);
    let fn = parseInt(fin.value);
    lista.innerHTML = "";
    let num = ini;
    while (num <= fn){
        let Numprimo = true;
        if (num <= 1) {
            Numprimo = false;
        } 
        else {
            for (let i = 2; i * i <= num; i++){
                if (num % i === 0) {
                    Numprimo = false;
                    break;
                }}}
        if (Numprimo) {
            let item = document.createElement("li");
            item.textContent = num;
            lista.appendChild(item);
        }
        num++;}
});