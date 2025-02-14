#Manejo de archivos
"""
w = write
r = read
a = append
x = create
"""
#Abre un archivo en modo de escritura y si no existe lo crea (write)

f = open("archivo.txt", "w")
f.write("Hola mundo")
f.close()

#Abre un archivo en modo de lectura (read)
f = open("archivo.txt", "r")
print(f.read())
f.close()

#Abre un archivo en modo de append, es decir, abre un archivo en modo de escritura y si no existe lo crea,
# a su vez agrega (append)
f= open("archivo.txt", "a")
f.write("\nAdios mundo")
f.close()

#Abre un archivo en modo de creacion, es decir, abre un archivo en modo de escritura y si no existe lo crea (create)
f = open("archivo2.txt", "x")
f.write("Hola mundo")
f.close()

#Elimina un archivo
import os
os.remove("archivo2.txt")


#Abre un archivo y lee cada linea
archivo = open("archivo.txt", "r")
for linea in archivo:
    print("linea: " + linea)
archivo.close()

