/* Notas: 
1- Mandar datos a la consola: console.log(dato)
2- Mandar datos a un input: cajaSalida.valve=dato
3- Mandar datos a una etiqueta (contenedor): divInfo.innerHTML=dato
                                            <div id="divInfo">
                                            </div> 

4- Mostrar datos en una lita, agregando li como elementos:
*innerHTML
*appendChild()
*createElemnt() 
*/

const texto = document.getElementById("texto");
const btn = document.getElementById("btnCalcular");
const salida = document.getElementById("salida");

btn.addEventListener("click", e => { 
    e.preventDefault();
    let txt = texto.value;
    let totalAs = 0;
    let i = 0;

    while(i < txt.length){
        if( txt[i].toUpperCase() == "A" ){
            totalAs++;
        }
        i++;
    }
    salida.innerHTML = "Total de letra A: " + totalAs;
});