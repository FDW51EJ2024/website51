const num = document.getElementById("inicio");
const fin = document.getElementById("fin");
const btnS = document.getElementById("btnSub");
const list = document.getElementById("lista");

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num !== 1 && num !== 0;
}

btnS.addEventListener("click",e=> {
    e.preventDefault();
    inicio = parseInt(num.value);
    end = parseInt(fin.value);
    lista.innerHTML = ""; 
    
    if(inicio == 1){
        let item =document.createElement("li");
        item.innerHTML =inicio;
        lista.appendChild(item);
    }

    for(let i=inicio; i<=end; i++){
        if(isPrime(i)){
                let item =document.createElement("li");
                item.innerHTML =i;
                lista.appendChild(item);
        }
    }
})
