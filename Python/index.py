#Variables



numero = 10
nombre = "Juan"
numero_decimal = 3.14
verdadero = True
falso = False
lista = [1,2,3,4,5]
tupla = (1,2,3,4,5) #Array que no se puede modificar
diccionario = {
    'nombre': 'Juan',
    'edad': 22
}
nulo = None

#Imprimir
print(numero)

#Concatenar
print("Hola " + nombre)
#Interpolacion
print("Hola f{nombre}")

#Conversion de datos
print(int("1")+1)
print(str(1)+"1")

#Operadores de asignacion
numero += 1
numero -= 1
numero *= 1
numero /= 1
numero %= 1
numero **= 1
numero //= 1

#Operadores de comparacion
print(10 == 10) #True
print(10 != 10) #False
print(10 > 10)  #False
print(10 < 10) #False
print(10 >= 10) #True
print(10 <= 10) #True

#Operadores Lógicos

#and
print(False and False) #False

#or

print(True or False) #True

#not

print(not True) #False

#Input

nombre = input("Cual es tu nombre? ")

#Condicionales
if nombre == "Pepito":
    print("Hola Pepito")
elif nombre == "Pedro":
    print("Hola Pedro")
else:
    print ("Hola desconocido")

#Clases
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def saludar(self):
            print(f"Hola mi nombre es {self.nombre} y tengo {self.edad} años")

Persona1 = Persona("Soleil" "22")
Persona1.saludar()

#Herencia

class Empleado(Persona):
    def __init__(self, nombre, edad, apellido, salario):
            try:
                super().__init__(nombre, edad)
                self.salario = salario
                self.apellido = apellido
            except Exception as e:
                print("Ocurrio un error -->" + e)

    def mostrar_salario(self):
            print(f"Salario: {self.salario}")

try:
    empleado = Empleado ("Juan", "Perez", 5000)
    empleado.saludar()
    empleado.mostrar_salario()
except:
    print("Ocurrio un error")

#Expresiones Regulares (Validaciones)
#Validar un correo
import re
correo = "hola@gmail.com"
patron = "[a-zA-Z0-9]+@[a-zA-Z]+\.(com|net|org)"
if re.match(patron, correo):
    print("Correo valido")

