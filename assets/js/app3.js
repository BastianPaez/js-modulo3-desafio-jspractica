document.addEventListener('DOMContentLoaded', ()=>{

    const valor1        = document.querySelector('#valor1');
    const valor2        = document.querySelector('#valor2');
    const textResultado = document.querySelector('span');
    const btnSumar      = document.querySelector('#btn-sumar');
    const btnRestar     = document.querySelector('#btn-restar');

    btnSumar.addEventListener('click', sumar);
    btnRestar.addEventListener('click', restar);

    function sumar(){
        const suma = parseInt(valor1.value) + parseInt(valor2.value);
        validar(suma);
    }

    function restar(){
        const resta = parseInt(valor1.value) - parseInt(valor2.value);
        validar(resta);
    }

    const validar = (resultado)=>{
        if (resultado < 0 ){
            textResultado.textContent = `0`;
        } else {
            textResultado.textContent = resultado;
        }
    }
})