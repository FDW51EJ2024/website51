console.log("Hola mundo");
console.error("Hola mundo tenemos problemas");
console.warn("Hola mundo");

alert("Hola mundo");

document.title = "Hola mundo";

/*suma de numeros*/

let num1 = 45;
let num2 = 450;
let suma = num1 + num2;

console.log(`la suma es: ${suma}`);

let materias = ["fdw","estadistica","almacenes","oblig"];
document.write(materias);
document.write(`La ultima mat es ${ materias[1]}`);
console.log(materias.indexOf("almacenes"));

let resultados4Semestre = {
    matricula : 1254,
    nombre : "omar",
    calificaciones : [100,90,100,100],
    inscrito : true
}
console.log( resultados4Semestre.matricula)
console.log( resultados4Semestre.calificaciones[1]);

let texto = "";
texto = materias.length>3 ? "dificil" : "facil";
console.log(texto);