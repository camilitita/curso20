class calculator {
  constructor (){
  }
  addition (a, b) {
    return a + b;
  }

  substraction(a, b) {
    return a - b;
  }

  multiplication(a, b) {
    return a * b;
  }

  divition (a,b) {
    if (b===0) {
      alert ("Opción inválida");
    }
    return a / b;
  }


  Menu_display () {
    let option;
    while (true){
      option = prompt(
        "Seleccione una operación:\n" +
        "1. Sumar\n" +
        "2. Restar\n" +
        "3. Multiplicar\n" +
        "4. Dividir\n" +
        "5. Salir"
      );
    if (["1", "2", "3", "4", "5"].includes(option)) {
      break;
    } else {
      console.log("Opción inválida, por favor ingrese un número entre 1 y 5.");
    }
  }
  return option;
  }

  Process (option) {
    let result;
    if (option === "5" ) {
      console.log ("Saliendo, nos vemos!");
      return;
    }
    else if (option === "1") {
      let b = parseFloat(prompt('Por favor ingrese el primer número: '));
      let a = parseFloat(prompt('Por favor ingrese el segundo número: '));
      result = this.addition(a, b);
    }
    else if (option === "2") {
      let b = parseFloat(prompt('Por favor ingrese el primer número: '));
      let a = parseFloat(prompt('Por favor ingrese el segundo número: '));
      result = this.substraction(a, b);
    }
    else if (option === "3") {
      let b = parseFloat(prompt('Por favor ingrese el primer número: '));
      let a = parseFloat(prompt('Por favor ingrese el segundo número: '));
      result = this.multiplication(a, b);
    }
    else if (option === "4") {
      let a = parseFloat(prompt('Por favor ingrese el primer número: '));
      let b = parseFloat(prompt('Por favor ingrese el segundo número: '));
      result = this.divition(a, b);
    }
    console.log("Su resultado es: ", result);
  }

  iniciar() {
    let option;
    do {
      option = this.Menu_display();
      this.Process(option);
    } while (option !== "5");
  }
}

const calculatorr = new calculator();
calculatorr.iniciar();


