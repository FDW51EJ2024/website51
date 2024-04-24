/* web apis son librerias para manipular cosas dentro de la web (el link que envió el profe), el num 1 del const num 1 es de tipo HTMLInputElement */
/* api= serie de clases, intefaces desarolladas para manipular cierto tipo de objetos */
/* apps= usa apis para construir una aplicación */


const cajita = document.getElementById("prueba");
        const boton = document.getElementById("btnejecutar");

        boton.addEventListener("click", e => {
            e.preventDefault();
            cajita.maxLength = 3;
            cajita.value = 51;
            cajita.style.fontSize = 25;
            cajita.style.border = "3px solid blue";
            cajita.style.backgroundColor = "yellow"; 
        });