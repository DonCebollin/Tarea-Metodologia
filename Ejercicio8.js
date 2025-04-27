//!Crea un array de números y usa reduce para obtener la suma total.

let array = [1,4,6,7,4]
let suma = array.reduce(function(acumulador, valoractual){
    return acumulador + valoractual;
}, 0);

console.log(suma);