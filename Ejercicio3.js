//!Crea una función que reciba un nombre como parámetro y devuelva un saludo como string.


function saludar(nombre){  //?Esta parte del codigo recibe una funcion llamada "saludar" que recibe un parametro llamado "nombre"
 return "Hola " + nombre  //? Se crea el string que dice "Hola" + el nombre recibido, y se devuelve con un return

}
let saludo = "Cristopher :)"; //? Se crea la variable saludo y se le asigna el nombre "Cristopher" 
console.log(saludar(saludo)); //? Dentro del console.log se llama a la funcion nombre y se le asigna el nombre anteriormente dado