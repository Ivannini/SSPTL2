# [UNIVERSIDAD DE GUADALAJARA CUCEI](https://www.udg.mx/es)

**![image](https://github.com/Ivannini/SSPTL2/assets/99306363/f138dab3-55d3-4c09-b704-f479b3214fc4)**


Centro Universitario de Ciencias Exactas e Ingenierías
División de Electrónica y Computación
Departamento de Ciencias Computacionales

Carrera: Ingenieria en computacion

Materia: SEMNINARIO DE SOLUCION DE PROBLEMAS DE TRADUCTORES DE LENGUAJE II

Nrc: 103841

Clave: I7028

AULA DUCT2-7

Seccion: D02
        
Siglo: 2024A

Horario: Lunes y Miercoles 1 a 3 PM 

Alumno: Nudelstejer Gomez Ivan

Codigo: 218130122

PROFESOR: MICHEL EMANUEL LOPEZ FRANCO

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Curso de la Materia](http://pregrado.udg.mx/sites/default/files/unidadesAprendizaje/i7028_-_seminario_de_solucion_de_problemas_de_traductores_de_lenguajes_ii_-_2016b_0.pdf)

La materia de "Seminario de Solución de Problemas de Traductores de Lenguaje II" es un curso avanzado dentro del ámbito de la informática y la ingeniería de software, que se centra en el estudio y la resolución de problemas específicos relacionados con la construcción y optimización de traductores de lenguajes de programación.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Modulos](https://github.com/TraductoresLenguajes2/Traductores)

- **Módulo 1: Los símbolos léxicos del compilador.**
- **Módulo 2: Ejemplos LR(1).**
- **Módulo 3: Practica de analizador sintáctico LR.**
- **Módulo 4: Gramática del Compilador.**
- **Módulo 5: Practica Árbol Sintáctico.** 
- **Módulo 6: Practica de Análisis Semántico.**
- **Proyecto Final.**

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [¿Qué es es un analizador léxico?](https://github.com/Ivannini/SSPTL2/blob/main/Nudelstejer_Gomez_Ivan_218130122_%20Inv_Analizador%20Lexico.pdf)

Un analizador léxico es una parte de un compilador o intérprete que escanea el código fuente y lo divide en unidades básicas llamadas tokens, como palabras clave, identificadores y operadores. Es el primer paso en el proceso de traducción del código fuente a un formato que la computadora pueda entender.

Imaginemos que queremos construir un analizador léxico para un lenguaje de programación simple que solo admite operaciones aritméticas básicas (+, -, *, /) y números enteros. El analizador léxico debe ser capaz de reconocer y clasificar los tokens presentes en una cadena de entrada.

Por ejemplo, dada la cadena de entrada: "5 + 3 * 2 - 4", el analizador léxico debería producir la siguiente secuencia de tokens:

- Número entero: 5
- Operador de suma: +
- Número entero: 3
- Operador de multiplicación: *
- Número entero: 2
- Operador de resta: -
- Número entero: 4

Esta secuencia de tokens representa los elementos individuales de la expresión aritmética y es el resultado del análisis léxico realizado por el analizador.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Mini Generador lexico](https://github.com/Ivannini/SSPTL2/blob/main/Modulo2/Mini%20Generador%20lexico.py)
Genera un pequeño analizador léxico, que identifique los siguientes tokens (identificadores y números reales) construidos de la siguiente manera.  identificadores = letra(letra|digito)* Real = entero.entero+

La tarea del generador léxico es identificar y clasificar estos tokens a partir de la cadena de entrada, siguiendo reglas predefinidas que especifican la estructura léxica del lenguaje de programación. Estas reglas suelen definirse mediante expresiones regulares.

Un "mini" generador léxico generalmente implica que se trata de una implementación más simplificada y compacta en comparación con un generador léxico completo. Puede ser utilizado con fines educativos, para entender los conceptos básicos de análisis léxico y compiladores, o para implementar rápidamente un análisis léxico en proyectos más pequeños.

Este mini generador léxico que has creado puede identificar y clasificar tokens como identificadores, enteros y operadores en una cadena de entrada. Utiliza un autómata finito para realizar el análisis léxico, con estados que representan diferentes partes del token que está siendo analizado.

Por ejemplo, si proporcionas la cadena "a123.45+b", el generador léxico clasificará cada parte de la cadena en tokens y lexemas correspondientes. Por lo tanto, el resultado podría ser algo como:

```
{'token': 'identificador', 'lexema': 'a'} Tipo: 0
{'token': 'entero', 'lexema': '123'} Tipo: 1
{'token': 'real', 'lexema': '.45'} Tipo: 2
{'token': 'opSuma', 'lexema': '+'} Tipo: 5
{'token': 'error', 'lexema': 'b'} Tipo: -1
```

Esto indica que 'a' es un identificador, '123' es un número entero, '.45' es un número real, '+' es un operador de suma, y 'b' es un error porque no se ajusta a ninguna regla definida en el análisis léxico.

·Ejemplo del codigo

```
import re

def lexer(input_string):
    tokens = []
    patterns = [
        ('IDENTIFIER', r'[a-zA-Z][a-zA-Z0-9]*'),
        ('REAL', r'\d+\.\d+')
    ]

    for pattern in patterns:
        token_type, regex = pattern
        matches = re.findall(regex, input_string)
        for match in matches:
            tokens.append((token_type, match))
    
    return tokens

input_string = "hola123 45.67 890.123"
tokens = lexer(input_string)
print(tokens)
```


<img width="431" alt="Captura de pantalla 2024-01-18 193843" src="https://github.com/Ivannini/SSPTL2/assets/99306363/45bda66a-77b0-4438-b743-de11f63481f6">

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Etapa del proyecto analizador léxico completo](https://github.com/Ivannini/SSPTL2/blob/main/Modulo1/Simbolos_lexicos/lexico.py)

La etapa del proyecto de un analizador léxico completo implica el diseño e implementación de un componente crucial en la construcción de compiladores y procesadores de lenguaje: el analizador léxico. Este componente es responsable de leer el código fuente de un programa y convertirlo en una secuencia de "tokens" o unidades léxicas significativas para el compilador.

**Análisis de requisitos**: Identificar los requisitos específicos del lenguaje que el analizador léxico debe reconocer y procesar.

**Diseño del analizador léxico**: Establecer la estructura y el comportamiento del analizador, incluyendo la elección de algoritmos y estructuras de datos.

**Implementación**: Escribir el código del analizador léxico basado en el diseño previamente establecido.

**Pruebas y depuración**: Probar exhaustivamente el analizador léxico para garantizar su funcionamiento correcto y corregir cualquier error o defecto encontrado.

**Optimización**: Mejorar el rendimiento y eficiencia del analizador léxico, si es necesario, mediante técnicas de optimización.

**Documentación**: Documentar el código del analizador léxico para facilitar su comprensión y uso por parte de otros desarrolladores.

**Integración**: Integrar el analizador léxico con otros componentes del compilador o procesador de lenguaje, como el analizador sintáctico y el generador de código.



    
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



<img width="386" alt="image" src="https://github.com/Ivannini/SSPTL2/assets/99306363/82023752-ec93-45ab-8989-15e69f9d875f">


<img width="293" alt="image" src="https://github.com/Ivannini/SSPTL2/assets/99306363/c5f1442b-7e70-43dc-b59c-ad47cd71ce61">

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Analizador Lexico](https://github.com/Ivannini/SSPTL2/blob/main/Modulo1/Etapa%20del%20proyecto%20de%20analizador%20lexico%20completo.pdf)

El Análisis Léxico es la primera fase de un compilador, este consiste en un programa que recibe como entrada el código fuente de otro programa (secuencia de caracteres) y produce una salida compuesta de tokens (componentes léxicos) o símbolos. 
Un analizador léxico es una parte esencial de un compilador o intérprete que se encarga de analizar un flujo de caracteres de un programa fuente y convertirlo en una secuencia de "tokens" o unidades léxicas. Los tokens son unidades significativas de un lenguaje de programación, como palabras clave, identificadores, constantes y operadores. 

<img width="353" alt="Captura de pantalla 2024-03-19 213658" src="https://github.com/Ivannini/SSPTL2/assets/99306363/01b3031e-78ec-4df4-afb9-3d074c8513d0">

Supongamos que tenemos una línea de código en Python:

```python
x = 10 + 20
```

El analizador léxico dividiría esta línea en los siguientes tokens:

1. Token de identificador: `x`
2. Token de asignación: `=`
3. Token de número entero: `10`
4. Token de operador de suma: `+`
5. Token de número entero: `20`

Cada token representa una unidad léxica significativa en el código, y el analizador léxico los identifica para su procesamiento posterior por parte del compilador o intérprete de Python.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Mini analizador sintáctico (Excel)](https://github.com/Ivannini/SSPTL2/blob/main/Mini%20analizador%20sintactico(excel).xlsx)
Subir un archivo en excel simulando las gramáticas del ejercicio 1 y 2 del archivo (Practica Analizador Sintactico LR.pdf)

Entrada para el Ejercicio 1
hola+mundo

Entrada para el Ejercicio 2
a+b+c+d+e+f

![Captura de pantalla 2024-04-19 174426](https://github.com/Ivannini/SSPTL2/assets/99306363/b954eca3-7cf4-4a4b-9954-c2ecbf669cdc)

- Asi se veia el programa:

  
![image](https://github.com/Ivannini/SSPTL2/assets/99306363/c1acbea6-51ec-4872-aa4e-590eed6e0b7f)

![image](https://github.com/Ivannini/SSPTL2/assets/99306363/d3cba9c4-72a3-4b4d-bdc4-f45e9d0d94c0)




----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Mini analizador sintáctico (código)](https://github.com/Ivannini/SSPTL2/tree/main/Modulo2)
Generar un algoritmo para analizar los Ejercicios 1 y 2, los que se realizaron en excel, ahora se realizaran mediante codigo.

# [Codigo](https://github.com/Ivannini/SSPTL2/blob/main/Modulo3/Tarea%3A%20Mini%20analizador%20sint%C3%A1ctico%20(c%C3%B3digo)Parte%202.py)
Se define una clase Pila que implementa una pila básica utilizando una lista en Python. Esta clase tiene métodos para realizar operaciones típicas de una pila como push, pop, top, muestra, e isEmpty.

    class Pila:
    def __init__(self):
        self.items = []

    def push(self, elemento):
        self.items.append(elemento)

    def pop(self):
        if not self.isEmpty():
            return self.items.pop()

    def top(self):
        if not self.isEmpty():
            return self.items[-1]

    def muestra(self):
        for item in self.items:
            print(item, end=' ')
        print()

    def isEmpty(self):
        return len(self.items) == 0


Se define una clase Lexico que representa un analizador léxico básico. Esta clase se utiliza para analizar una cadena de entrada y dividirla en símbolos. Tiene métodos para avanzar al siguiente símbolo y verificar si se ha llegado al final de la entrada.

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



<img width="303" alt="image" src="https://github.com/Ivannini/SSPTL2/assets/99306363/f65ef57e-f3ee-44b0-a529-ae6fc6130162">

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Analizador Sintactico](https://github.com/Ivannini/SSPTL2/blob/main/Tarea_%20Analizador%20Sint%C3%A1ctico%20(Implementaci%C3%B3n%20usando%20Objetos).pdf)

Las reglas sintacticas que leemos por el documento compilador .lr que es la tabla estados, que nos proporciona la informacion de que tipo de variables o tipo de accion estamos ejecutando y asi sacar un lenguaje mas completo que nos sevira de apollo para el anamizador semantico.

![image](https://github.com/Ivannini/SSPTL2/assets/99306363/5f4dc38a-63ce-44f9-a875-b75a7a95d111)



Se ha implementado una jerarquía de clases mediante el uso de herencia y clases abstractas para modelar elementos de una pila, tales como Terminal, NoTerminal y Estado. La clase Pila se encarga de gestionar una lista que actúa como una pila, con métodos para agregar, eliminar y mostrar elementos. Se han instanciado objetos de las clases definidas, añadiéndolos a la pila y mostrando su contenido. El código sigue los principios de la programación orientada a objetos (OOP) con la aplicación de encapsulamiento y polimorfismo.

Se han definido tres clases concretas que heredan de ElementoPila: Terminal, NoTerminal y Estado. Cada una de estas clases representa un tipo de elemento que puede encontrarse en la pila. Además, cada clase implementa el método "muestra" según su propio tipo, permitiendo una visualización personalizada de la información asociada a cada elemento.

    // Clase base ElementoPila
    class ElementoPila {
    public:
    virtual ~ElementoPila() {}  // Destructor virtual
    virtual void muestra() = 0;  // Función virtual pura
    };

    // Clase Terminal hereda de ElementoPila
    class Terminal : public ElementoPila {
    protected:
    string nombre;
    public:
    Terminal(string nombre) : nombre(nombre) {}

    void muestra() override {
        cout << "Terminal: " << nombre << endl;
    }
    };

    // Clase NoTerminal hereda de ElementoPila
    class NoTerminal : public ElementoPila {
    protected:
    string nombre;
    public:
    NoTerminal(string nombre) : nombre(nombre) {}

    void muestra() override {
        cout << "No Terminal: " << nombre << endl;
    }
    };

    // Clase Estado hereda de ElementoPila
    class Estado : public ElementoPila {
    protected:
    string nombre;
    public:
    Estado(string nombre) : nombre(nombre) {}

    void muestra() override {
        cout << "Estado: " << nombre << endl;
    }
    };
    
Se define la clase Pila, que representa una pila de elementos. Tiene métodos para agregar (push) y quitar (pop) elementos de la pila, así como para obtener el elemento en la parte superior de la pila (top). Además, tiene un método muestra para mostrar el contenido de la pila.

    class Pila:
    def __init__(self):
        self.lista = []

    def push(self, elemento):
        self.lista.insert(0, elemento)

    def pop(self):
        return self.lista.pop(0)

    def top(self):
        return self.lista[0] if self.lista else None

    def muestra(self):
        print("Pila:")
        for elemento in self.lista:
            elemento.muestra()
        print()



El resultado del análisis sintáctico es una estructura de datos que representa la estructura gramatical del código fuente, como un árbol de análisis sintáctico (también conocido como árbol de análisis o árbol de sintaxis). Esta estructura se utiliza como entrada para el analizador semántico, que se encarga de realizar verificaciones adicionales y análisis de significado en el código fuente.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Gramática del compilador](https://github.com/Ivannini/SSPTL2/blob/main/Gramatica%20de%20compilador.pdf)

El programa comienza abriendo una ventana de diálogo que permite al usuario seleccionar un archivo de texto. Una vez que el usuario selecciona un archivo, el programa lee el contenido del archivo y lo almacena en una cadena de texto. Si el usuario no selecciona ningún archivo, el programa muestra un mensaje de advertencia y termina.

link aqui[https://github.com/Ivannini/SSPTL2/blob/main/Modulo4/pruebas.py]

Después de obtener las instrucciones del archivo, el programa llama a un componente llamado "AnalizadorSintactico" para realizar el análisis sintáctico de esas instrucciones. Si el análisis es exitoso, el programa muestra el resultado del análisis, que puede incluir información sobre la estructura sintáctica de las instrucciones, como un árbol sintáctico.

    class Sintactico {
    
    constructor() {
        this.pila = new Pila();
        this.fila = 0;
        this.columna = 0;
        this.accion = 0;
        this.idReglas = [];
        this.lonReglas = [];
        this.simReglas = [];
        this.tablaLR = [];
        this.arbol = new Arbol();


        fetch('/GramaticaCompilador/compilador.lr').then(res => res.text())
        .then(content => {
            console.log(content);
            let lines = content.split(/\n/);
            let numReglas = parseInt(lines.shift());
            for (let i = 0; i < numReglas; i++) {
                lines[i] = lines[i].replace("\r", "");
                let regla = lines[i].split("\t");
                this.idReglas.push(regla[0]);
                this.lonReglas.push(regla[1]);
                this.simReglas.push(regla[2]);
            }

            let numFila = parseInt(lines[numReglas].split("\t").shift());
            numReglas++;
            for (let i = numReglas; i < numReglas + numFila; i++) {
                lines[i] = lines[i].replace("\r", "");
                let fila = lines[i].split("\t");
                this.tablaLR.push(fila);
            }
        });
    }

La clase `LRTable` tiene cuatro atributos: `idRegla`, `lonRegla`, `noTerminal` y `table`. Estos atributos se inicializan como listas vacías en el constructor `__init__`.

```python
class LRTable:
    def __init__(self, filename):
        self.idRegla = []
        self.lonRegla = []
        self.noTerminal = []
        self.table = []
```


Cada línea del archivo se lee y se almacena en la variable `lines`. Luego, se itera sobre las primeras tres líneas (`lines[:3]`). Para cada línea, se eliminan los espacios en blanco al inicio y al final con `strip()`, y luego se divide la línea en partes utilizando el carácter de tabulación como separador (`'\t'`) mediante `split('\t')`. Estas partes se almacenan en la lista `parts`.

```python
lines = file.readlines()
for line in lines[:3]:
    parts = line.strip().split('\t')
    try:
        self.idRegla.append(int(parts[0]))
        self.lonRegla.append(int(parts[1]))
        self.noTerminal.append(parts[2])
    except IndexError:
        print("Error: formato incorrecto en la línea:", line.strip())
```


Este código lee las primeras tres líneas del archivo para inicializar los atributos de la tabla LR. Si alguna línea tiene un formato incorrecto, se imprime un mensaje de error. Es importante tener en cuenta que esta implementación asume que las tres primeras líneas del archivo contienen información relevante para la tabla LR, como identificadores de reglas, longitud de reglas y no terminales.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Arbol Sintactico](https://github.com/Ivannini/SSPTL2/files/15214192/Arbol.Sintactico.pdf)

El Árbol de sintaxis abstracta es una estructura de datos usada extensamente en compiladores, debido a su propiedad de representar la estructura del código de un programa. Un AST es usualmente el resultado del analizador sintáctico en la fase de un compilador. A menudo sirve como un intermediario de la representación del programa a través de etapas que requiere el compilador, y tiene un impacto fuerte en la salida final del compilador.

Ademas incluye el siguiente el siguiente codigo y su árbol sintáctico que se genera.

El objetivo es generar un árbol sintáctico utilizando el siguiente código:

```
int a;
int suma(int a, int b){
return a+b;
}

int main(){
float a;
int b;
int c;
c = a+b;
c = suma(8,9);
}
```

Muestra el codigo que se agrego el arbol sintactico(etapa)

·Ejemplo 1:
![repechaje drawio (3)](https://github.com/Ivannini/SSPTL2/assets/99306363/4f6d169c-d031-48ee-848f-5dd8214b909f)

Ejemplo 2:
![repechaje drawio (2)](https://github.com/Ivannini/SSPTL2/assets/99306363/85672b18-496b-4f4b-8e38-3cb8bbf6006d)



Capturas de pantalla del árbol generado:

![image](https://github.com/Ivannini/SSPTL2/assets/99306363/42703ddc-92a0-4b89-87b3-0efc3533e7db)


![image](https://github.com/Ivannini/SSPTL2/assets/99306363/a125e6b1-3ce3-43d3-a082-b6b63994d399)


![image](https://github.com/Ivannini/SSPTL2/assets/99306363/71c912c1-f826-48ed-8325-b76901fbdcb8)




----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Analizador semantico

El analizador semántico es una fase crucial en el proceso de compilación que se encarga de analizar el significado y la coherencia del código fuente, una vez que ha pasado la etapa de análisis sintáctico. A diferencia del analizador sintáctico, que se enfoca en la estructura gramatical del código, el analizador semántico se centra en el significado y la lógica detrás de las construcciones del lenguaje de programación.

Después de que el analizador sintáctico ha generado una representación estructurada del código, como un árbol de análisis sintáctico, el analizador semántico examina este árbol para detectar posibles errores semánticos, como incompatibilidades de tipos, uso incorrecto de variables o funciones, o cualquier otra violación de las reglas semánticas del lenguaje.

Una vez que el análisis semántico ha validado el código y ha confirmado su coherencia, el proceso de traducción puede comenzar. En un proyecto específico, este texto puede ser un archivo de texto plano que contiene código fuente en el lenguaje definido por el compilador. Antes de iniciar la traducción, el analizador semántico puede requerir información adicional, como la ubicación y terminación del texto a traducir.

<img width="470" alt="Captura de pantalla 2024-03-15 082910" src="https://github.com/Ivannini/SSPTL2/assets/99306363/f33d9408-f091-4621-9d41-1f91f90aa4f5">

La traducción del texto implica convertir el código fuente en una forma ejecutable o en un código objeto para su posterior ejecución o uso. Durante este proceso, el analizador semántico puede generar una lista de datos relevantes que ayudan a comprender la naturaleza del texto, como información sobre las variables, funciones, clases u otros elementos del programa.

Además, el analizador semántico puede contribuir a la creación y construcción de estructuras de datos más complejas, como el árbol de sintaxis abstracta, que representa de manera más precisa la semántica del código y facilita procesos posteriores, como la optimización y la generación de código.

<img width="641" alt="Captura de pantalla 2024-03-21 094043" src="https://github.com/Ivannini/SSPTL2/assets/99306363/4c8d94c9-ab6e-4d2e-8f73-96ef21265331">

Simple de un árbol sintáctico abstracto (AST) generado a partir de un programa en un lenguaje de programación hipotético. 

### Programa de ejemplo:
```python
entero x = 5
entero y = 10

funcion suma(entero a, entero b) retorna entero:
    regresa a + b

entero resultado = suma(x, y)
escribir(resultado)
```

### Árbol Sintáctico Abstracto (AST):

```
Programa
|__ Definiciones
    |__ DefinicionVar
    |   |__ Identificador: x
    |   |__ Tipo: entero
    |   |__ Valor: 5
    |
    |__ DefinicionVar
    |   |__ Identificador: y
    |   |__ Tipo: entero
    |   |__ Valor: 10
    |
    |__ DefinicionFunc
        |__ Identificador: suma
        |__ Tipo: entero
        |__ Parametros
        |   |__ Parametro
        |   |   |__ Identificador: a
        |   |   |__ Tipo: entero
        |   |
        |   |__ Parametro
        |       |__ Identificador: b
        |       |__ Tipo: entero
        |
        |__ BloqFunc
            |__ DefLocales
            |   |__ DefLocalSent
            |       |__ SentenciaExpre
            |           |__ Expresion
            |               |__ ExpresionOp (+)
            |                   |__ ExpresionTermino
            |                   |   |__ TerminoIdent: a
            |                   |
            |                   |__ ExpresionTermino
            |                       |__ TerminoIdent: b
            |
            |__ SentenciaReturn
                |__ ValorRegresa
                    |__ Expresion
                        |__ ExpresionOp (+)
                            |__ ExpresionTermino
                            |   |__ TerminoIdent: a
                            |
                            |__ ExpresionTermino
                                |__ TerminoIdent: b

|__ SentenciaFunc
    |__ LlamadaFunc
        |__ Identificador: escribir
        |__ Argumentos
            |__ Expresion
                |__ TerminoIdent: resultado
```

Este es un ejemplo simplificado del árbol sintáctico abstracto que podría generarse a partir del programa proporcionado. Cada nodo del árbol representa una estructura o elemento del programa, y los nodos están organizados de acuerdo con la estructura jerárquica del programa. El árbol es atravesado por el analizador semántico para realizar análisis y verificaciones.

Ejemplo de cómo se podría usar este analizador semántico en un programa Python ficticio:

```python
programa {
    entero x
    funcion suma(a, b) {
        entero resultado
        resultado = a + b
        regresa resultado
    }
    
    x = 10
    entero y = 5
    si (x > y) {
        entero resultado_suma
        resultado_suma = suma(x, y)
        imprimir("La suma es: ", resultado_suma)
    }
}
```

Se define una variable `x`, una función `suma`, asigna valores a `x` e `y`, y luego verifica si `x` es mayor que `y` para llamar a la función `suma` y mostrar el resultado.

Ahora, si ejecutamos este código utilizando el analizador semántico que proporcionaste, podría generar una tabla de símbolos similar a la siguiente:

```
Tabla de Símbolos:
--------------------
Identificador | Tipo    | Ámbito | Es Función
-----------------------------------------------
x             | entero  | Global | False
suma          | función | Global | True
y             | entero  | Global | False
resultado     | entero  | suma   | False
resultado_suma| entero  | Global | False
```

Este es solo un ejemplo de cómo se podría generar la tabla de símbolos para este programa en particular. La tabla muestra los identificadores, sus tipos, los ámbitos en los que están definidos y si son funciones o no. El analizador semántico se encarga de recorrer el código, construir esta tabla y asegurarse de que no haya errores semánticos, como el uso de variables no definidas o la redefinición de símbolos.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# [Proyecto Final](https://github.com/Ivannini/SSPTL2/blob/main/Modulo6/%C3%A1rbol%20sint%C3%A1ctico.pdf)

Objetivo: reunir los programas y realizar un arbol para hacer que se compile en un solo programa tanto como lexico, sintactico y semantico.

requerimientos:

**Analizador lexico** 

**Analizador Sintactico** 

**Analizador Semantico** 

**Gramatica del compilador(compilador.Ir)** 

**Arbol Sintactico**

-------------------------------------------------------------------------------------------------------------------------------------------
A continuacion Se mostrara el funcionamiento del codigo del Proyecto Final de la materia, el cual cuenta con la implementacion del Analizador Lexico, Analizador Sintactico y el Analizador Semantico.

para esta elaboración y decodificación del programa es necesario contar con la version 3.12 de python,(es imprescindible contar con la versión actualizada para compilar) y Tkinter para facilitar la selección del archivo que se desea traducir. Tkinter nos proporciona una herramienta que hace más práctica la visualización de nuestros archivos. En mi caso, dirigí el programa directamente a la carpeta de pruebas y le indiqué que buscara los archivos con la extensión .txt.


<img width="511" alt="Captura1" src="https://github.com/Ivannini/SSPTL2/assets/99306363/5f467874-ce5f-44f1-acea-237be4334251">


Al iniciar la compilación del programa, una vez seleccionemos nuestro archivo comenzara el analisis. este solicita el directorio del archivo a traducir. al seleccionado, comienza el proceso de  la traducción. Para este ejemplo, utilizaremos los archivos p1 y p2, ambos con extensión .txt.


<img width="263" alt="suma" src="https://github.com/Ivannini/SSPTL2/assets/99306363/29b6b174-8ef4-403e-b8a2-665c9b3ad8de">


<img width="255" alt="sumafloat" src="https://github.com/Ivannini/SSPTL2/assets/99306363/082f1ae0-87c8-4fa6-bad4-3c2af1727c37">

El cual nos mostrara el siguiente arbol.
· Resultado del Arbol Sintactico


<img width="908" alt="Captura de pantalla 2024-03-24 194624" src="https://github.com/Ivannini/SSPTL2/assets/99306363/3e8b4f09-7be5-4a00-b68a-8398c968460e">






<img width="124" alt="Captura de pantalla 2024-03-24 194137" src="https://github.com/Ivannini/SSPTL2/assets/99306363/3591b2cb-3af3-49ed-94fa-c7ab3498428f">




<img width="158" alt="Captura de pantalla 2024-03-24 194255" src="https://github.com/Ivannini/SSPTL2/assets/99306363/a8f58853-0f4a-4fdc-bb38-8fe010104957">

Por lo cual se genera la raiz en un arbol:

![algo drawio](https://github.com/Ivannini/SSPTL2/assets/99306363/06a8fe63-0bc1-48e5-9a05-012fd6282140)

![algo2 drawio](https://github.com/Ivannini/SSPTL2/assets/99306363/6d92b01d-6c4f-43b0-b884-8bb84deb5f7c)

Comprobando con el mensaje final que el codigo compilo correctamente.

Cuando un compilador o un analizador sintáctico procesa el código fuente de un programa, lo descompone en componentes léxicos (tokens) y luego analiza la estructura de estos componentes para verificar su conformidad con las reglas gramaticales del lenguaje. Durante este proceso, se construye un árbol sintáctico que refleja la jerarquía de las construcciones sintácticas del programa.

Los árboles sintácticos son útiles porque proporcionan una representación visual de la estructura del programa que es más fácil de entender y manipular que el código fuente original. Además, son utilizados por el compilador para realizar análisis semántico y optimizaciones, así como para generar código objeto o intermedio.

Este es el resultado del proceso de compilación, El cual nos mostrara el siguiente arbol. Adjunto el diagrama de árbol generado utilizando Draw.io.

arbol utilizando drawio


![arbol sintactico drawio](https://github.com/Ivannini/SSPTL2/assets/99306363/41668374-527f-4e9d-bd44-8a04384c4937)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Conclusiones

Este proyecto fue algo bastante pesado para mí. Nunca antes había utilizado mas en Python en lo profundidad y saltar a crear un analizador que fue un desafío considerable. Por eso, tardé tanto en comprender su funcionamiento. Sin embargo, fue una experiencia muy enriquecedora, ya que ahora tengo una mejor comprensión de cómo funcionan los compiladores, aprendí muchas cosas en el proceso Para mí, eso es más que suficiente. Espero tener más desafíos como este en el futuro para seguir creciendo.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Referencias

*https://app.diagrams.net/*




































