const prueba = document.getElementById('prueba');
const btnPrueba = document.getElementById('btnPrueba');

btnPrueba.addEventListener('click', e => {
    e.preventDefault();
    prueba.maxLength = 3;
    prueba.value = '51';
    prueba.style.fontSize = '25px';
    prueba.style.border = '5px solid green';
});