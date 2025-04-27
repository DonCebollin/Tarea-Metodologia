//!Crea un array de números y utiliza filter para obtener los números mayores a 5.

let array = [6,7,8,4,1,2,9,10]
let filterArr = array.filter(function(numero){
    return numero > 5;
});

console.log(filterArr);