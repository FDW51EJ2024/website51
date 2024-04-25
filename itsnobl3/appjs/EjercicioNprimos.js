const inicio = document.getElementById("inicio");
const fin = document.getElementById("fin");
const boton = document.getElementById("botonres");
const lista = document.getElementById("lista");

boton.addEventListener("click",e =>{
    e.preventDefault();
    lista.innerHTML="";
    let ini = parseInt(inicio.value);
    let fin = parseInt(fin.value);
    
    for(let num = ini; num <= fn;num++);
        let rimo = true;
        if (num <= 1){
            primo = false;
        } else{
            for (let i = 2; i <= Math.sqrt(num); i++){
                if (num % i === 0){
                    primo = false;
                    break;
                }
            }
        }
        if (primo){
            let item = document.createElement("li")
            item.textContent = num;
            lista.appendChild(item);
        }

});