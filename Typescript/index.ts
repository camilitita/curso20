//Tipos de datos en Typescript

let apellido: string = "Perez";
let edad: number = 23;
let casado: boolean = false;
let fechaNacimiento: Date = new Date();
let extra: any = "Cualquier cosa";
let sinDefinir: undefined = undefined;
let nulo: null = null;

//Para declarar un arreglo se puede hacer de la siguiente manera
let arreglo: number[] = [1, 2, 3, 4, 5];

//Para declarar un arreglo de cualquier tipo de dato se puede hacer de la siguiente manera
let arreglo2: any[] = [1, "hola", true, new Date()];

//Para declarar objetos se puede hacer de la siguiente manera
let persona: { nombre: string, edad: number } = {
    nombre: "Juan",
    edad: 23
};

//Declarar una función
function suma(a: number, b: number): number {
    return a + b;
}

//Declara una interfaz
/*Las interfaces son un tipo de dato que se utiliza para definir la estructura de un objeto, es decir,
que propiedades y métodos debe tener un objeto para que sea válido. */

interface IPersona {
    nombre: string;
    edad: number;
}

let persona2: IPersona = {
    nombre: "Juan",
    edad: 23
};




