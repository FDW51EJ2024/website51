const inicio = document.getElementById("inicio");
const fin = document.getElementById("fin");
const orden = document.getElementById("orden");
const boton = document.getElementById("btnver");
const lista = document.getElementById("lista");

boton.addEventListener("click", e=> {
    e.preventDefault();
    let ini = parseInt(inicio.value);
    let f = parseInt(fin.value);
    let o =orden.value;
    if(o == "A"){

        let i =ini;
        do{
            let item =document.createElement("li");
            item.innerHTML =i;
            lista.appendChild(item);
            i++;
        }while(i <= f);
    }
    else if(o == "D"){
        let i =f;
        do{
            let item =document.createElement("li");
            item.innerHTML =i;
            lista.appendChild(item);
            i--;
        }while(i >= ini);
    }
});