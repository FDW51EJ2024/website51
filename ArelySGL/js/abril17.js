const inc = document.getElementById("inc");
const fin = document.getElementById("fin");
const ser = document.getElementById("serie");
const btn = document.getElementById("btn");

btn.addEventListener("click", e => {
    e.preventDefault();

    let seriefinal = ""; 
    let ini = parseInt(inc.value);
    let final = parseInt(fin.value);

    for (let i = ini; i <= final; i++) {
        if (i % 2 === 0) {
            seriefinal += i + ",";
        }
    }
    
    ser.value = seriefinal.slice(0, -1); 
});
