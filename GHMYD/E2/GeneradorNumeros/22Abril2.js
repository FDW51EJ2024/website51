const inicio = document.getElementById("inicio")
const fin = document.getElementById("fin")
const orden = document.getElementById("orden")
const boton = document.getElementById("btnVer")
const lista = document.getElementById("lista")

boton.addEventListener("click", e => {
    e.preventDefault();

    let ini = parseInt(inicio.value);
    let finn = parseInt(fin.value);
    let ord = orden.value;

    if( ord == "A" ){

        let i = ini;
        lista.innerHTML = "";
        do {
            let item = document.createElement("li"); 
            item.innerHTML = i;
            lista.appendChild(item);
            
            i++;
        }while( i <= finn);
    }

    else if ( ord == "D" ){

        let i = finn;
        lista.innerHTML = "";
        do {
            let item = document.createElement("li"); 
            item.innerHTML = i;
            lista.appendChild(item);
            
            i--;
        }while( i >= ini);
    }

});

