const calific = document.getElementById("calif");
const review = document.getElementById("review");
const botonVer = document.getElementById("btnVer");

botonVer.addEventListener("click", () => {
    
    let calif = parseInt(calific.value);

    if (calif == 100) {
        review.value = "PERFECTO";
    } else if (calif >= 90 && calif <= 99) {
        review.value = "Dejando buen sabor de boca";
    } else if (calif >= 80 && calif <= 89) {
        review.value = "Todavía sabe a gloria";
    } else if (calif >= 70 && calif <= 79) {
        review.value = "Pasar es pasar";
    } else if (calif <= 69) {
        review.value = "Nos vemos en segundas";
    }
});