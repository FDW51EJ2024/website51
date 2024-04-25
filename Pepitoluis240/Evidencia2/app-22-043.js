const inicio = document.getElementById("inicio");
const fin = document.getElementById("fin");
const boton = document.getElementById("btnVer");
const lista = document.getElementById("listaprima");


boton.addEventListener("click", e =>{
    e.preventDefault();
    let ini = parseInt(inicio.value);
    let f = parseInt(fin.value);
    let i = ini;
    lista.innerHTML="";
    
    do{
        let primo = true;
        for (let num = 2; num < i; num++) {
            if (i % num == 0) {
                primo = false;
                break;
            }
        }
        if (primo) {
            let item= document.createElement("li");
            item.innerHTML= i;
            lista.appendChild(item) ;
        }
        i++
    } while (i<= f);
});


