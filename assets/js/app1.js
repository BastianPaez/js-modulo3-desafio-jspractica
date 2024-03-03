document.addEventListener("DOMContentLoaded", ()=>{


    let datos = {
        nombre : '',
        asunto : '',
        mensaje: ''
    }

    const formulario = document.querySelector('#formulario');
    const nombre     = document.querySelector('#nombre');
    const asunto     = document.querySelector('#asunto');
    const mensaje    = document.querySelector('#mensaje');

    
    formulario.addEventListener('submit', enviarMensaje);


    function enviarMensaje(e){
        e.preventDefault();
        limpiarDatos();
        capturarDatos();
        validar(datos.nombre, nombre);
        validar(datos.asunto, asunto);
        validar(datos.mensaje, mensaje);
    }
    
    const limpiarDatos = ()=>{
        datos.nombre = ''
        datos.asunto = '';
        datos.mensaje = '';
    }
    const capturarDatos = ()=>{
        datos.nombre = nombre.value.trim();
        datos.asunto = asunto.value.trim();
        datos.mensaje = mensaje.value.trim();
    }
    const validar = (parametro, input) =>{
        const regex = /^[a-zA-Z]+$/;

        if (parametro === ""){
            input.nextElementSibling.textContent = `El ${input.id} es requerido`;
            return
        }
        if (!regex.test(parametro)){
            input.nextElementSibling.textContent = `Ingrese ${input.id} válido (Solo caracteres de A-Z)`;
            return
        } else {
            formulario.previousElementSibling.textContent = 'Mensaje enviado con exito!!';
        }
    }


    

})