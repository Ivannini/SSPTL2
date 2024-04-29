import sys
from tkinter import Tk
from tkinter import messagebox
from tkinter.filedialog import askopenfilename
from analizadorsintactico import AnalizadorSintactico
from analizadorsemantico import AnalizadorSemantico

def abrir_archivo():
    root = Tk()
    root.withdraw()
    direccion = ""
    instrucciones = ''
    while not direccion:
        direccion = askopenfilename(initialdir="./pruebas/", filetypes=[("TXT", "*.txt")])
        if not direccion:
            if not messagebox.askretrycancel(message="No selecciona un archivo ¿Desea volve a intentarlo?", title="archivo no seleccionado"):
                return False
    archivo = open(direccion, "r")
    instrucciones = archivo.readlines()
    instrucciones = ' '.join(map(str.strip,instrucciones))
    archivo.close()
    return instrucciones

def main():
    cadena = abrir_archivo()
    if not cadena:
        print("El código compilo correctamente")
        return
    else:
        analizador = AnalizadorSintactico()
        resultado = analizador.analizadorSintacticoEnteros(cadena)
        if resultado:
            analizador.arbol.arbol.muestra()
            analizadorSem = AnalizadorSemantico(analizador.arbol.arbol)
            print("El código compilo correctamente")
  

if __name__ == '__main__':
    main()
