const btnProcesar = document.getElementById("btnProcesar")

btnProcesar.addEventListener("click", e => {
    e.preventDefault();

    let suma = 0

    for(let num = 2000; num <= 2150; num++){
        suma += num
    }

    console.log("La suma total es:", suma)
})