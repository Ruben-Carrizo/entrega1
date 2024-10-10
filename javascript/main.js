//ejercicios entrega1

//1-Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
function numeroPar(numero){
    if (numero % 2===0){
        console.log(`${numero} es par`);
    }else{
        console.log("es impar")
    }
}
numeroPar()

//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
function mayorMenorIgual(a,b){
    if (a>b){
        console.log(`${a} es mayor que ${b}`)
    }else if (a<b){
        console.log(`${a} es menor que ${b}`)
    }else{
        console.log("son iguales")
    }
}
mayorMenorIgual()

//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
function multiplosDe5(x5){
    if (x5 % 5 === 0){
        console.log(`${x5} es multiplo de 5`)
    }else{
        console.log(`${x5} no es multiplo de 5`)
    }
}
multiplosDe5()

//4-Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
function imprimirNumeros(hasta) {
    for (let i = 0; i <= hasta; i++) {
        console.log(i);
    }
}
imprimirNumeros()

//5- Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
function imprimirPalabra(palabra, numero) {
    for (let i = 0; i < numero; i++) {
        console.log(palabra);
    }
}
imprimirPalabra()
//6-Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
function imprimirArray(array) {
    array.forEach(function(elemento) {
        console.log(elemento);
    });
}
imprimirArray()
//7-Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
function arraySin5(array) {
    if (array.length !== 10) {
        console.log("El array debe contener exactamente 10 números.");
        return;
    }
    for (let i = 0; i < array.length; i++) {
        if (i !== 4) { 
            console.log(array[i]);
        }
    }
}
arraySin5()

//8- Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
function multiplicarArray(array, multiplicador) {
    array.forEach(function(numero) {
        console.log(numero * multiplicador);
    });
}
multiplicarArray()