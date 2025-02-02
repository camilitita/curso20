var numero1 = 10;
var numero2 = 20;

var operador = ["+"];

if (operador == "+") {
  result = numero1 + numero2;
}
else if (operador == "-") {
  result = numero1 - numero2;
}
else if (operador == "/") {
  result = numero1 / numero2;
}
else if (operador == "*") {
  result = numero1 * numero2;
}
else {
  console.log("Entrada invalida");
}

console.log(`$result`);


var dia = 6;

if (dia = 1) {
  console.log("Lunes");
}
else if (dia = 2) {
  console.log("Martes");
}
else if (dia = 3) {
  console.log("Miercoles");
}
else if (dia = 4) {
  console.log("Jueves");
}
else if (dia = 5) {
  console.log("Viernes");
}
else if(dia = 6) {
  console.log("Sabado");
}
else if (dia = 7) {
  console.log("Domingo");
}
else {
  console.log("Entrada invalida");
}

function calculo(operador, num1, num2){
  if (operador == "+"){
    resultado = num1 + num2;
    console.log("Su resultado es " + resultado);
  }
  else if (operador == "-"){
    resultado = num1 - num2;
    console.log("Su resultado es " + resultado);
  }
  else if (operador == "*"){
    resultado = num1 * num2;
    console.log("Su resultado es " + resultado);
  }
  else if (operador == "/"){
    resultado = num1 / num2;
    console.log("Su resultado es " + resultado);
  }
}

calculo("+", 10, 10);
calculo("-", 20, 10);
calculo("*", 30, 3);
calculo("/", 40, 2);

/*
  Ejercicios de metodos de arrays
  1. Crea una función que reciba un array de numeros y devuelva la suma de todos los numeros.
  2. Crea una función que reciba un array de numeros y devuelva el promedio de todos los numeros.
  3. Crea una función que reciba un array de numeros y devuelva el numero mayor.
  4. Crea una función que reciba un array de numeros y devuelva el numero menor.
  5. Crea una función que reciba un array de numeros y devuelva un array con los numeros pares.
  6. Crea una función que reciba un array de numeros y devuelva un array con los numeros impares.
  7. Crea una función que reciba un array de ciudades y devuelva un array con las ciudades que empiezan con la letra "M".
  8. Crea una función que reciba un array de nombres y verifique si el nombre "Juan" se encuentra en el array y devuelva su posicion.
*/

/**
 * Made with ❤️ by:
 * Alejandro Aguilar
 * Angélica Rivas
 * Camila Castillo
 * Herasi Silva
 */

let num_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let city_array = ["Madrid", "Buenos Aires", "Ciudad de México", "Lima", "Mérida"];
let name_array = ["Pepito", "José", "Juan", "José"];

// 1
let sum = 0;
num_array.forEach(element => { sum += element });
console.log(sum);

// 2
let length = num_array.length;
console.log(sum / length);

// 3
let sorted_array = num_array.sort();
let largest_element = sorted_array[sorted_array.length - 1];
console.log(largest_element);

// 4
let smaller_element = sorted_array[0];
console.log(smaller_element);

// 5
let even_array = [];
num_array.forEach(element => {
  if (element % 2 == 0) {
    even_array.push(element)
  }
});
console.log(even_array);

// 6
let odd_array = [];
num_array.forEach(element => {
  if (element % 2 != 0) {
    odd_array.push(element)
  }
});
console.log(odd_array);

// 7
console.log(city_array.filter(city => city.startsWith("M")));

// 8
console.log(name_array.indexOf("Juan"));