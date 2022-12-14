/* las variables se pueden declarar usando la palabra reservada 'var' o 'let' let es una palabra reservada
    mas moderna y además que es mejor visto para las practicas de programación mas modernas 
    'const' es una palabra reservada que se usa para valores constantes osea que no vam a cambiar
 */

console.log("\n-------Variables-----------\n");
var numero_1 = 1;
let numero_2 = 2;
const numero_3 = 3;
console.log("Número 1 = " + numero_1 + ", Número 2 = " + numero_2 + ", Número 3 = " + numero_3);

/* cadenas de caracteres 'Strings' pueden definirse con comillas dobles ""  o con comillas simpres ''
    o en otros casos con comillas invertidas ``

    meter valores en una cadena es con ${variable} pero solo con asentos invertidos
 */

console.log('\n=====Cadenas de texto=====\n');
var cadena1 = "Frase 1";
let cadena2 = 'frase 2';
const cadena3 = `Esto es una cadena concatenada ${numero_1}`;
console.log(cadena1 + "\n" + cadena2 + "\n" + cadena3);

/* los condicionales se pueden usar como valores <> = != == === 
    y cada una tiene una funcionalidad de comparación de elementos
    retorna 'true' o 'false'
    */

const text = "====Comparacion de variables (boolean)===="
console.log(text)
console.log(numero_1 == numero_2);
console.log(numero_1 != numero_2);

/* Operadores logicos se usan cuando se nesesitan comparar mas de un condional
AND > && nesesita que todos sus valores sean true para que regrese un true en una salida
OR >> || necesita que solo uno de sus valores sea true para que regrese un resultado
en cuestion de jerarquia el OR tienen mas orden jeracquico que el AND
*/

let message = 'Operador logico AND > &&';
console.log(message);
console.log(true && true);
console.log(numero_1 < numero_2 && numero_2 !== numero_3);
let message_2 = 'Operador logico OR > ||';
console.log(message_2);
console.log(false || false);
console.log(numero_2 === numero_3 || numero_2 < numero_3);

/* Los areglos son vectors, estructuras de datos que permiten agrupar datos de un mismo tipo,
un arreglo empieza su indice en 0 (primer valor del array) */

let mensaje_array = "Arreglos/Arrays";
let listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(mensaje_array);
console.log(listOfNumbers);
let MensajeArreyIndex = 'Seleccion de Numero por numero de indice';
console.log(MensajeArreyIndex);
console.log(listOfNumbers[5]);

/* agregar un valor a un array */
listOfNumbers.push(123);
listOfNumbers.push(16);
console.log(listOfNumbers);
/* longitud del array */
console.log(listOfNumbers.length);

/* eliminar el ultimo valor de un array */
listOfNumbers.pop();
console.log(listOfNumbers);
console.log(listOfNumbers.length);

let listasDePalas = ["Hola", "Mundo", "Esto", "es", "Una", "Prueba"];
console.log(listasDePalas);
console.log(listasDePalas.length);

/* las cadenas (strings) tambien se pueden tratar como arrays */

let cadena = "Hola Mundo"
console.log(cadena)
console.log(cadena[0])
console.log(cadena.length);

/* los objetos son estructuras de datos que pueden agrupar diferetenes tipos de datos */

let MensajeObjetos = "============Objetos de datos==============";
console.log(MensajeObjetos);
let diccionario = {
    nombre: "Diccionario de prueba",
    correo: "correo1@mail.com",
    numero_registro: 1,
    mision: "FrontEnd",
    proyectos: ["comunidad", "hackathon 1", "hackathon 2"],
    proPer: {
        escolar: "Tareas",
        profecional: "Trabajo",
        personal: "negocio",

    },
};

console.log(diccionario)
console.log(diccionario.proPer.escolar)

/* flujo condicional */

let numero1 = 1;
let numero2 = 2;
let textoFlujo = "==== IF ELSE====";
console.log(textoFlujo);
if (numero1 > numero2) {
    console.log(true);
} else if (numero2 > numero1) {
    console.log(true);
} else{
    console.log("El numero es igual");
}