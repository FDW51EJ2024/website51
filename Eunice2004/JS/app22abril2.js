
const inicio = document.getElementById("inicio");
const fin = document.getElementById("fin");
const orden = document.getElementById("orden");
const boton = document.getElementById("btnver");
const lista = document.getElementById("lista");

boton.addEventListener("click", e => {
    e.preventDefault();
    let ini = parseInt(inicio.value);
    let f =parseInt(fin.value);
    let o = orden.value;
    if(o == "a"){
        let i = ini;
        lista.innerHTML="";
        do {
            let item = document.createElement("li");
            item.innerHTML = i;
            lista.appendChild(item);

            i++;
        }while(i <= f);
    }
    if(o == "d"){
        let i = f;
        lista.innerHTML="";
        do {
            let item = document.createElement("li");
            item.innerHTML = i;
            lista.appendChild(item);

            i--;
        }while(i >= ini);
    }
})

