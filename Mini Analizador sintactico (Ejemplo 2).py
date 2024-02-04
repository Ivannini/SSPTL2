import tkinter as tk
import sys

class Lexico:
    def __init__(self, entrada):
        self.entrada = entrada
        self.indice = 0
        self.simbolo = ''

    def sigSimbolo(self):
        if self.indice < len(self.entrada):
            self.simbolo = self.entrada[self.indice]
            self.indice += 1

    def terminado(self):
        return self.indice >= len(self.entrada)

def ejemplo2():
    lexico = Lexico("+-+")

    while not lexico.terminado():
        lexico.sigSimbolo()
        texto_resultado.insert(tk.END, lexico.simbolo + "\n")

    lexico = Lexico("a")
    texto_resultado.insert(tk.END, "\nIdentificador reconocido:\n")

    while not lexico.terminado():
        lexico.sigSimbolo()
        texto_resultado.insert(tk.END, lexico.simbolo + "\n")

# Crear la interfaz gráfica con Tkinter
root = tk.Tk()
root.title("Mini Analizador Sintáctico")

# Crear y configurar el widget de texto
texto_resultado = tk.Text(root, height=10, width=50)
texto_resultado.pack()

# Botón para ejecutar el ejemplo2
boton_ejemplo2 = tk.Button(root, text="Ejemplo 2", command=ejemplo2)
boton_ejemplo2.pack()

# Redirigir la salida estándar al widget de texto
def redirigir_salida(text_widget):
    class StdoutRedirector:
        def write(self, string):
            text_widget.insert(tk.END, string)
            text_widget.see(tk.END)

    sys.stdout = StdoutRedirector()

# Configurar la redirección de salida al widget de texto
redirigir_salida(texto_resultado)

# Ejecutar la interfaz gráfica
root.mainloop()
