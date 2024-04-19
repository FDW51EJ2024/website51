/* mandar a la consola la suma de esta serie:
2000 + 2001 +.... + 2150*/

/*1. hacer la constante para el boton
2. agregar al boton el listener click
3. prevenir la accion por default del boton
4. crear una variable para la suma
5. hacer un for para los numeros 2000 al 2150
6. sumar cada numero
7. mandar a la consola la suma */

const boton = document.getElementById("btnProcesar");

boton.addEventListener("click", e =>{
    e.preventDefault();

    let suma = 0
    for(let num = 2000; num <= 2150; num++){
        suma = suma + num
    }
    console.log("La suma es", suma);
});