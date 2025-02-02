let compras = [
  {
    producto: "Manzana",
    precio: 1.5,
    tipos: ["Golden", "Red", "Green"],
    cantidad: 10
  },
  {
    producto: "Pera",
    precio: 2.5,
    tipos: ["Bartlett", "Anjou", "Bosc"],
    cantidad: 5
  }
  ]

/*
Ejercicios de ciclos
1. Crea un ciclo que imprima los numeros del 1 al 100.
2. Crea un ciclo que permita imprimir cada uno de los valores de la variable compra.
3. Crea un ciclo que imprima los numeros pares del 0 al 100 de dos en dos. (2, 6, 10, 14, 18, ...)
4. Realiza el ejercicio de Fibonacci utilizando un ciclo. (Debes imprimir solo los primeros 15 valores)
*/

// 1
let array = []
for (let i = 1; i <= 100; i++) {
  array.push(i)
}
console.log(array)


// 2
for (let element of compras) {
  console.log("Producto: " + element.producto)
  console.log("Precio: " + element.precio)
  console.log("Tipos: " + element.tipos)
  console.log("Cantidad: " + element.cantidad)
}

// 3
let array_1 = []
for (let i = 2; i <= 100; i = i + 4) {
  array_1.push(i)
}
console.log(array_1)

// 4
let array_2 = []
let a = 0
let b = 1

for (let i = 1; i <= 15; i++) {
  let next = a + b
  array_2.push(next)
  a = b
  b = next
}
console.log(array_2)

