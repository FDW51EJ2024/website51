const inicio = document.getElementById("inicio");
const fin = document.getElementById("fin");
const orden = document.getElementById("orden");
const boton = document.getElementById("btnVer");
const list = document.getElementById("list");

boton.addEventListener("click", e => {
    e.preventDefault();
    let ini = parseInt(inicio.value);
    let f = parseInt(fin.value);
    let o = orden.value;

    if(o == "A"){

        let i = ini;
        list.innerHTML = "";
        do{
            let item = document.createElement("li");
            item.innerHTML = i;
            list.appendChild(item);
            i++;
        }while(i<=f);
    }
    else if(o == "D"){

        let i = f;
        list.innerHTML = "";
        do{
            let item = document.createElement("li");
            item.innerHTML = i;
            list.appendChild(item);
            i--;
        }while(i>=ini);
    }
})