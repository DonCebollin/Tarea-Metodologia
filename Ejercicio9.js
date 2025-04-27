//!Crea una función asincrónica que espere 2 segundos y luego devuelva un mensaje
//!Usa await para esperar su resultado e imprimirlo.
function esperarDosSegundos(){
    return new Promise((resolver) => {
        setTimeout(() => {
            resolver("Patito Wapo");
        }, 2000);
    });
};

async function mostrarMensaje( ) {
    const mensaje = await esperarDosSegundos();
    console.log(mensaje);
    
}

mostrarMensaje();
