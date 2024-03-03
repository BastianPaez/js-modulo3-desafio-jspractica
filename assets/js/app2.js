document.addEventListener('DOMContentLoaded', ()=>{

    const rojo = document.querySelector('#btn-1');
    const anaranjado = document.querySelector('#btn-2');
    const amarillo = document.querySelector('#btn-3');
    const verde = document.querySelector('#btn-4');
    const celeste = document.querySelector('#btn-5');
    const rosa = document.querySelector('#btn-6');
    const caja = document.querySelector('#caja')
    
    rojo.addEventListener('click', cambiarColor);
    anaranjado.addEventListener('click', cambiarColor);
    amarillo.addEventListener('click', cambiarColor);
    verde.addEventListener('click', cambiarColor);
    celeste.addEventListener('click', cambiarColor);
    rosa.addEventListener('click', cambiarColor);

    function cambiarColor(e){
        switch (e.target.id){
            case 'btn-1':
                caja.style.backgroundColor = '#e53e3e'
                break
            case 'btn-2':
                caja.style.backgroundColor = '#dd6b20'
                break
            case 'btn-3':
                caja.style.backgroundColor = '#faf089'
                break
            case 'btn-4':
                caja.style.backgroundColor = '#48bb78'
                break
            case 'btn-5':
                caja.style.backgroundColor = '#81e6d9'
                break
            case 'btn-6':
                caja.style.backgroundColor = '#d53f8c'
            break
        }
    };


})