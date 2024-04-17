const boton = document.getElementById("boton")

boton.addEventListener("click", e=>{
    e.preventDefault();
    let suma=0
    for(let num=2000; num<=2150; num++){
            suma = suma + num
    }
    console.log("La suma es", suma);
});