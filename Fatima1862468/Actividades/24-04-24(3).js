const inicio = document.getElementById("inicio");
const fin = document.getElementById("fin");
const btn = document.getElementById("btnver");
const lista = document.getElementById("lista");

btn.addEventListener("click", e => {
    e.preventDefault();

    let inicioo = parseInt(inicio.value);
    let fiin = parseInt(fin.value);
    lista.innerHTML = "";

    for( let i = inicioo; i <= fiin; i++){
        let primo = true;

        if(i <= 1){
            primo = false;
        }
        else{
            for(let pr = 2; pr <= Math.sqrt(i); pr++){
                if(i % pr === 0 ){
                    primo = false;
                    break;
        
                }
            }
        }

        if(primo){
            let item = document.createElement("li");
            item.textContent = i;
            lista.appendChild(item);
        }
    };

});