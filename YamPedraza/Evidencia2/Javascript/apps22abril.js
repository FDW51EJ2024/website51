/* mandar datos a la consola console.log(dato)*/

/* mandar datos a un input cajaSalida.value=dato */

/* mandar datos a una etiqueta (contenedor) divInfo.innerHTML=dato  <div id=info> -> </div>*/

/* mostrar datos en una lista, agregando li como elementos  <ul id="lista">
                                                            <li> LTI </li>
                                                            </ul> */

/*
* inner HTML
* appendChild()
* createElement()
*/

/*calcular el texto de as del texto*/

const texto = document.getElementById("texto");
const btn = document.getElementById("btnCalcular");
const salida = document.getElementById("salida");

btn.addEventListener("click", e => {
    e.preventDefault();
    let txt = texto.value;
    let totalAs = 0;
    let i = 0;

    while(i < txt.length){
        if(txt[i].toUpperCase() == "A"){
            totalAs++;
        }

        i++;
    }
    salida.innerHTML = "Total de letra A:" + totalAs;
});