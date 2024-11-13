//Scope (Alcance)
//Variable global
var nombre = "Cami";
//Variable local
let apellido = "Castillo";
//Constante
const PI = 3.1416;

//Alcance
if (true) {
  let numero1 = 16;
  var numero2 = 20;
}

//console.log(numero1); //error
console.log(numero2)

//Si se declara una variable let fuera de un bloque de codigo
//Se toma como una variable global

//Funciones

/*
Nos permiten reutilizar un bloque de codigo, son similares a 
un mixin de sass
*/

//Funcion sin parametros
//Declaracion de la funcion
function saludar(){
  console.log("Hola, soy una funcion");
}

//Llamamos a la funcion (se utiliza)
saludar();

//Funcion con parametros

function saludarpersona(nombre){
  console.log("Hola, soy " + nombre);
}

saludarpersona("Manuel");
saludarpersona("Jose");

//Los prototipos en js son una forma de agregar propiedades y metodos a un objeto

console.log("Hola Mundo".length);

/*En un objeto hay propiedades y metodos, las propiedades devuelven un valor
los metodos devuelven una funcion
*/

//Metodos de strings


//Funcion con Retorno
function sumar(num1 = 0, num2 = 0){
  return num1 + num2;
}

console.log(sumar(15+30));
var resultado = sumar(30, 40);

//Funciones flecha o funciones anonimas
//Son una forma de escribir funciones de manera mas corta, pudiendosele asignar una variable

(number1 = 0, number2 = 0) => {number1 + number2};


//Recursividad (Funcion que se llama a si misma)

function contar(numero){
  console.log(numero);
  contar(numero + 1);
}

contar(0);

//Funcionamiento de un bucle

function contar(numero){
  if (numero >=100){
    return;
  }
  console.log(numero);
  contar(numero + 2);
}

contar(0);

//