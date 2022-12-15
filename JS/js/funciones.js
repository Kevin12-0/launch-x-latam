const cuadrado = function (x) {
    return x * x
};
let numero = 4;
let numeroAlCuadrado = cuadrado(numero);
console.log(numeroAlCuadrado);

const ruido = function () {
    console.log("RUIDOOOOOOO");
}
ruido();

const exponencial = function (base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}
let base = 2;
let exp = 3;
console.log(exponencial(base, exp));

console.log(sumar(2, 4));
function sumar(numero1, numero2) {
    return numero1 + numero2;
}

/* funciones flecha '=>' es para mandar valores a una funcion */

const restar = (numero1, numero2) => {
    return numero1 - numero2;
};
console.log(restar(15, 36));

function saludar(name) {
    console.log("Hola, " + name);
}
let firstName = "Kevin";
saludar(firstName);
console.log("Bye!!")
/* 
exepciones */

function preguntarDireccion(pregunta) {
    let result = prompt(pregunta);
    if (result.toLocaleLowerCase() == "Izquierda" || result.toLocaleLowerCase() == 'izquierda') return "I";
    if (result.toLocaleLowerCase() == "Derecha" || result.toLocaleLowerCase() == "Derecha") return "D";
    throw new Error("Dirección invalida: " + result);
}

function mirar() {
    if (preguntaDirección("A que lado?") == "I" || preguntaDirección("A que lado?") == "i") {
        return "Una casa";
    } else {
        return "2 perros rabiosos";
    }
}
try {
    console.log("Mira a: ", mirar());
} catch (e) {
    console.log("Error: " + e);
}

