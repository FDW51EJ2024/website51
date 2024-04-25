const NUM1 = document.getElementById("sum1");
const NUM2 = document.getElementById("sum2");
const SUMA = document.getElementById("Res");
const BTNSUMAR = document.getElementById("btnsumar");

BTNSUMAR.addEventListener("click", e => {
    e.preventDefault();

    let n1 = parseInt(NUM1.value);
    let n2 = parseInt(NUM2.value);

    let r = n1+n2;

    SUMA.value = r;
});