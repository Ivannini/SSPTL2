from io import open
import elementoPila
from analisisLexico2 import analizador
from pila import stack
from analisisSintactico import sintactico
from analisisLexico import *

analizador = sintactico()
file = open("test.txt")
test = file.read()
print("\n+++++++++EJEMPLO DE CÓDIGO+++++++++\n\n", test)
lexicoAux = AnalisisLexico(test)
lexicoAux = lexicoAux.rstrip(lexicoAux[-1])
analizador.compilador(lexicoAux)
