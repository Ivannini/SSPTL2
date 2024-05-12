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

- **Módulo 1: Mini analizador lexico.**
- **Módulo 2: Mini Analizador lexico.**
- **Módulo 3: Analizador sintáctico(Implementacion usando objetos.**
- **Módulo 4: Gramática del Compilador.**
- **Módulo 5: Mostrar Árbol Sintáctico.** 
- **Módulo 6: Análisis Semántico.**
- **Proyecto Final.**

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [¿Qué es es un analizador léxico?](https://github.com/Ivannini/SSPTL2/blob/main/Nudelstejer_Gomez_Ivan_218130122_%20Inv_Analizador%20Lexico.pdf)

Un analizador léxico es una parte de un compilador o intérprete que escanea el código fuente y lo divide en unidades básicas llamadas tokens, como palabras clave, identificadores y operadores. Es el primer paso en el proceso de traducción del código fuente a un formato que la computadora pueda entender.

Al construir un analizador léxico para un lenguaje de programación simple que solo admite operaciones aritméticas básicas (+, -, *, /) y números enteros. El analizador léxico debe ser capaz de reconocer y clasificar los tokens presentes en una cadena de entrada.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Mini Generador lexico](https://github.com/Ivannini/SSPTL2/blob/main/Modulo2/Mini%20Generador%20lexico.py)
Genera un pequeño analizador léxico, que identifique los siguientes tokens (identificadores y números reales) construidos de la siguiente manera.  identificadores = letra(letra|digito)* Real = entero.entero+

La tarea del generador léxico es identificar y clasificar estos tokens a partir de la cadena de entrada, siguiendo reglas predefinidas que especifican la estructura léxica del lenguaje de programación. Estas reglas suelen definirse mediante expresiones regulares.

Un "mini" generador léxico generalmente implica que se trata de una implementación más simplificada y compacta en comparación con un generador léxico completo. Puede ser utilizado con fines educativos, para entender los conceptos básicos de análisis léxico y compiladores, o para implementar rápidamente un análisis léxico en proyectos más pequeños.

Este mini generador léxico puede identificar y clasificar tokens como identificadores, enteros y operadores en una cadena de entrada. Utiliza un autómata finito para realizar el análisis léxico, con estados que representan diferentes partes del token que está siendo analizado.


<img width="431" alt="Captura de pantalla 2024-01-18 193843" src="https://github.com/Ivannini/SSPTL2/assets/99306363/45bda66a-77b0-4438-b743-de11f63481f6">

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Etapa del proyecto analizador léxico completo](https://github.com/Ivannini/SSPTL2/blob/main/Modulo1/Simbolos_lexicos/lexico.py)

La etapa del proyecto de un analizador léxico completo implica el diseño e implementación de un componente crucial en la construcción de compiladores y procesadores de lenguaje: el analizador léxico. Este componente es responsable de leer el código fuente de un programa y convertirlo en una secuencia de "tokens" o unidades léxicas significativas para el compilador.
    
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

![image](https://github.com/Ivannini/SSPTL2/assets/99306363/b4793c7c-aae9-4939-951d-dd8804c8be99)




----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Mini analizador sintáctico (Excel)](https://github.com/Ivannini/SSPTL2/blob/main/Mini%20analizador%20sintactico(excel).xlsx)
Subir un archivo en excel simulando las gramáticas del ejercicio 1 y 2 del archivo (Practica Analizador Sintactico LR.pdf)

Entrada para el Ejercicio 1
hola+mundo

![image](https://github.com/Ivannini/SSPTL2/assets/99306363/fa6e7a0d-6274-4c2b-95cb-85cf0fd50916)


Entrada para el Ejercicio 2
a+b+c+d+e+f

![image](https://github.com/Ivannini/SSPTL2/assets/99306363/befd26de-3656-487e-8255-e87d84f6b2a4)


![image](https://github.com/Ivannini/SSPTL2/assets/99306363/d88bf6c7-8574-458b-baaf-de70b11cd3a8)


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
# [Analizador Sintactico(Implementacion usando objetos)](https://github.com/Ivannini/SSPTL2/blob/main/Tarea_%20Analizador%20Sint%C3%A1ctico%20(Implementaci%C3%B3n%20usando%20Objetos).pdf)

Las reglas sintacticas que leemos por el documento compilador .lr que es la tabla estados, que nos proporciona la informacion de que tipo de variables o tipo de accion estamos ejecutando y asi sacar un lenguaje mas completo que nos sevira de apollo para el anamizador semantico.

[Compilador.Ir](https://github.com/Ivannini/SSPTL2/blob/main/Modulo4/compilador.lr)

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

![image](https://github.com/Ivannini/SSPTL2/assets/99306363/b9020d48-c42d-42c3-a750-5b9c18f6c0b2)


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Gramática del compilador](https://github.com/Ivannini/SSPTL2/blob/main/Gramatica%20de%20compilador.pdf)

Esta función toma el código fuente como entrada y genera una lista de tokens. Los tokens son los componentes básicos del lenguaje de programación, como palabras clave, identificadores, operadores, etc. El analizador léxico divide el código fuente en palabras individuales y las almacena como tokens.

Esta clase tiene cuatro atributos: idRegla, lonRegla, noTerminal, y table. Estos atributos se inicializan como listas vacías en el constructor init.
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

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Analizador semantico](https://github.com/Ivannini/SSPTL2/blob/main/Modulo6/Practica_Analizador%20Semantico.pdf)

El analizador semántico es una fase crucial en el proceso de compilación que se encarga de analizar el significado y la coherencia del código fuente, una vez que ha pasado la etapa de análisis sintáctico. A diferencia del analizador sintáctico, que se enfoca en la estructura gramatical del código, el analizador semántico se centra en el significado y la lógica detrás de las construcciones del lenguaje de programación.

Después de que el analizador sintáctico ha generado una representación estructurada del código, como un árbol de análisis sintáctico, el analizador semántico examina este árbol para detectar posibles errores semánticos, como incompatibilidades de tipos, uso incorrecto de variables o funciones, o cualquier otra violación de las reglas semánticas del lenguaje.

Una vez que el análisis semántico ha validado el código y ha confirmado su coherencia, el proceso de traducción puede comenzar. En un proyecto específico, este texto puede ser un archivo de texto plano que contiene código fuente en el lenguaje definido por el compilador. Antes de iniciar la traducción, el analizador semántico puede requerir información adicional, como la ubicación y terminación del texto a traducir.

<img width="470" alt="Captura de pantalla 2024-03-15 082910" src="https://github.com/Ivannini/SSPTL2/assets/99306363/f33d9408-f091-4621-9d41-1f91f90aa4f5">

La traducción del texto implica convertir el código fuente en una forma ejecutable o en un código objeto para su posterior ejecución o uso. Durante este proceso, el analizador semántico puede generar una lista de datos relevantes que ayudan a comprender la naturaleza del texto, como información sobre las variables, funciones, clases u otros elementos del programa.

Además, el analizador semántico puede contribuir a la creación y construcción de estructuras de datos más complejas, como el árbol de sintaxis abstracta, que representa de manera más precisa la semántica del código y facilita procesos posteriores, como la optimización y la generación de código.

<img width="641" alt="Captura de pantalla 2024-03-21 094043" src="https://github.com/Ivannini/SSPTL2/assets/99306363/4c8d94c9-ab6e-4d2e-8f73-96ef21265331">

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

# [Etapa Analizador Semantico](https://github.com/Ivannini/SSPTL2/blob/main/Modulo6/Etapa%20Analizador%20Semantico.pdf)

La etapa de análisis semántico es una fase importante en la compilación de un programa, donde se verifica que las instrucciones del código fuente tienen sentido en el contexto del lenguaje de programación utilizado y cumplen con las reglas definidas por ese lenguaje.

1. Declaraciones de variables: `a`, `b`, y `c` son variables. Se verifica si están declaradas correctamente y si sus tipos son consistentes con cómo se usan.

2. Asignación de valores: `c = a + b;` asigna el resultado de la suma de `a` y `b` a la variable `c`. Se verifica si los tipos de `a`, `b` y `c` son compatibles y si la operación tiene sentido (por ejemplo, si `a` y `b` son números, si tienen tipos compatibles con la suma, etc.).

3. Llamada a función: `c = suma(8,9);` parece ser una llamada a una función llamada `suma`. La semántica verificaría si la función `suma` está declarada correctamente y si los tipos de los argumentos coinciden con los esperados por la función.

En la etapa de análisis semántico, el compilador analiza las reglas del lenguaje de programación y verifica si el código fuente cumple con esas reglas en términos de tipos de datos, operaciones permitidas y otras restricciones semánticas.
 
```
int main(){
float a;
int b;
int c;
c = a+b;
c = suma(8,9);
```

- Ejemplo 1.


![image](https://github.com/Ivannini/SSPTL2/assets/99306363/79a72258-0b9b-4c00-9e6e-4aa204e84a48)


Este segundo ejemplo también es un fragmento de código en C.

1. **Declaración de variable global:** Se declara una variable global llamada `a`, que es de tipo `int` (entero).

2. **Declaración de una función:** Se define una función llamada `suma()` que toma dos parámetros de tipo `int` y devuelve un entero que es la suma de esos dos parámetros.

3. **Función `main()`:** Similar al primer ejemplo, aquí también está la función `main()`, que es el punto de entrada del programa.

4. **Declaración de variables locales:** Dentro de la función `main()`, se declaran tres variables locales: `a`, `b`, y `c`. `a` es de tipo `float`, mientras que `b` y `c` son de tipo `int`.

5. **Operación de asignación:** Al igual que en el primer ejemplo, hay dos líneas que asignan valores a la variable `c`. En la primera línea, se está asignando la suma de `a` y `b` a `c`. Sin embargo, `a` no tiene un valor asignado en este punto, lo que puede causar un comportamiento indefinido.

6. **Llamada a función:** En la segunda línea dentro de `main()`, se está llamando a la función `suma()` y asignando su resultado a la variable `c`. Sin embargo, los argumentos pasados a `suma()` son números decimales (`float`), pero la función `suma()` espera argumentos de tipo `int`. Esto podría generar un aviso o error de tipo en tiempo de compilación.

Se presenta una función definida que suma dos enteros, pero en la función `main()` hay una mezcla de tipos que podría causar problemas de tipo en tiempo de compilación o comportamiento indefinido en tiempo de ejecución.

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
c = suma(8.5,9.9);
}
```

- Ejemplo 2:

![image](https://github.com/Ivannini/SSPTL2/assets/99306363/25d4a7ea-6145-455e-98c5-c9e5aca5084b)


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

Ejemplo 1:


![algo drawio](https://github.com/Ivannini/SSPTL2/assets/99306363/06a8fe63-0bc1-48e5-9a05-012fd6282140)

Ejemplo 2:


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




































