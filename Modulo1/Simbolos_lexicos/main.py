import tkinter as tk
from tkinter import ttk
from lexico import AnalizadorLexico

class AnalizadorLexicoApp:
    def __init__(self, master):
        self.master = master
        master.title("Analizador Léxico")

        self.label = ttk.Label(master, text="Ingresa el código a evaluar:")
        self.label.grid(row=0, column=0, padx=10, pady=10, sticky="w")

        self.entry = ttk.Entry(master, width=50)
        self.entry.grid(row=0, column=1, padx=10, pady=10)

        self.analizar_button = ttk.Button(master, text="Analizar", command=self.analizar)
        self.analizar_button.grid(row=1, column=0, columnspan=2, padx=10, pady=10)

        self.resultados_label = ttk.Label(master, text="Resultados:")
        self.resultados_label.grid(row=2, column=0, padx=10, pady=5, sticky="w")

        self.resultados_text = tk.Text(master, height=10, width=60, wrap="none")
        self.resultados_text.grid(row=3, column=0, columnspan=2, padx=10, pady=5)
        self.resultados_text.configure(state="disabled", relief="sunken")

    def analizar(self):
        cadena = self.entry.get()

        if not cadena:
            self.resultados_text.configure(state="normal")
            self.resultados_text.delete(1.0, tk.END)
            self.resultados_text.insert(tk.END, "La cadena no es válida.")
            self.resultados_text.configure(state="disabled")
        else:
            analizador = AnalizadorLexico(cadena)
            resultados = "\nResultado del análisis léxico:\n\n"
            resultados += '{:<20} {:<20} {:<20}\n'.format("Símbolo", "Tipo", "Código de Tipo")

            while analizador.caracter != "$":
                analizador.siguienteSimbolo()
                resultado = '{:<20} {:<20} {:<20}\n'.format(
                    analizador.simbolo,
                    analizador.tipoCadena(analizador.tipo),
                    str(analizador.tipo)
                )
                resultados += resultado

            self.resultados_text.configure(state="normal")
            self.resultados_text.delete(1.0, tk.END)
            self.resultados_text.insert(tk.END, resultados)
            self.resultados_text.configure(state="disabled")

def main():
    root = tk.Tk()
    app = AnalizadorLexicoApp(root)
    root.mainloop()

if __name__ == '__main__':
    main()
