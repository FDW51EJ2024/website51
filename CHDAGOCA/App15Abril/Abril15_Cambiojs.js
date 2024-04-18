const caja = document.getElementById('caja');
const btncambio = document.getElementById('btncambio');

btncambio.addEventListener('click', e => {
    e.preventDefault();
    caja.maxLength = 3;
    caja.value = 'Cambio! 51';
    caja.style.fontSize = '26px';
    caja.style.border = '7px solid blue';
});