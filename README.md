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
# [¿Qué es es un AnalizadorLéxico?](https://github.com/Ivannini/SSPTL2/blob/main/Nudelstejer_Gomez_Ivan_218130122_%20Inv_Analizador%20Lexico.pdf)

Un analizador léxico es una parte de un compilador o intérprete que escanea el código fuente y lo divide en unidades básicas llamadas tokens, como palabras clave, identificadores y operadores. Es el primer paso en el proceso de traducción del código fuente a un formato que la computadora pueda entender.

Al construir un analizador léxico para un lenguaje de programación simple que solo admite operaciones aritméticas básicas (+, -, *, /) y números enteros. El analizador léxico debe ser capaz de reconocer y clasificar los tokens presentes en una cadena de entrada.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Mini Generador Lexico](https://github.com/Ivannini/SSPTL2/blob/main/Modulo2/Mini%20Generador%20lexico.py)
Genera un pequeño analizador léxico, que identifique los siguientes tokens (identificadores y números reales) construidos de la siguiente manera.  identificadores = letra(letra|digito)* Real = entero.entero+

Un "mini" generador léxico generalmente implica que se trata de una implementación más simplificada y compacta en comparación con un generador léxico completo. Puede ser utilizado con fines educativos, para entender los conceptos básicos de análisis léxico y compiladores, o para implementar rápidamente un análisis léxico en proyectos más pequeños.


```
def analizador_lexico(cadena):
    # Lista de tokens
    tokens = []
    # Patrones para identificar los diferentes tipos de tokens
    patrones = [
        ('IDENTIFICADOR', r'\b[a-zA-Z_][a-zA-Z0-9_]*\b'),
        ('ENTERO', r'\b\d+\b'),
        ('OP_SUMA', r'\+'),
        ('REAL', r'\b\d+\.\d+\b'),
        ('CADENA', r'"[^"]*"'),
        ('PESOS', r'\$')
    ]
    # Búsqueda de los patrones en la cadena de entrada
    for tipo, patron in patrones:
        for match in re.finditer(patron, cadena):
            token = Token(tipo, match.group(0))
            tokens.append(token)
    return tokens

# Cadena a analizar
cadena_a_analizar = 'Adios 21 + 14.3 "Texto" $100'
tokens = analizador_lexico(cadena_a_analizar)

# Imprimir los tokens encontrados
for token in tokens:
    print(f'Tipo: {token.tipo}, Valor: {token.valor}')
```


- Ejecucion
  
cadena_prueba = 'Adios 21 + 14.3 "Texto" $100'

<img width="431" alt="Captura de pantalla 2024-01-18 193843" src="https://github.com/Ivannini/SSPTL2/assets/99306363/45bda66a-77b0-4438-b743-de11f63481f6">

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Etapa del proyecto Analizador Léxico completo](https://github.com/Ivannini/SSPTL2/blob/main/Modulo1/Simbolos_lexicos/lexico.py)

Un analizador léxico es un módulo destinado a leer caracteres del archivo de entrada, donde se encuentra la cadena a analizar, reconocer subcadenas que corresponden a símbolos del lenguaje y devolver los tokens correspondientes y sus atributos.

Objetivo
Construir un analizador léxico capaz de diferenciar cadenas, identificadores, números reales y enteros, además de múltiples símbolos, operadores, tipos de datos y palabras reservadas.

    
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

- Ejecucion

<img width="386" alt="image" src="https://github.com/Ivannini/SSPTL2/assets/99306363/82023752-ec93-45ab-8989-15e69f9d875f">


<img width="293" alt="image" src="https://github.com/Ivannini/SSPTL2/assets/99306363/c5f1442b-7e70-43dc-b59c-ad47cd71ce61">

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [AnalizadorLexico](https://github.com/Ivannini/SSPTL2/blob/main/Modulo1/Etapa%20del%20proyecto%20de%20analizador%20lexico%20completo.pdf)

El Análisis Léxico es la primera fase de un compilador, este consiste en un programa que recibe como entrada el código fuente de otro programa (secuencia de caracteres) y produce una salida compuesta de tokens (componentes léxicos) o símbolos. 
Un analizador léxico es una parte esencial de un compilador o intérprete que se encarga de analizar un flujo de caracteres de un programa fuente y convertirlo en una secuencia de "tokens" o unidades léxicas. Los tokens son unidades significativas de un lenguaje de programación, como palabras clave, identificadores, constantes y operadores. 

# [Codigo](https://github.com/Ivannini/SSPTL2/blob/main/Modulo1/AnalizadorLexico.py)

```
tokens = [
    ('IDENTIFICADOR', r'[a-zA-Z][a-zA-Z0-9]*', 0),
    ('ENTERO', r'\d+', 1),
    ('REAL', r'\d+\.\d+', 2),
    ('CADENA', r'"[^"]*"', 3),
    ('TIPO', r'int|float|void', 4),
    ('OP_SUMA', r'[+-]', 5),
    ('OP_MUL', r'[*/]', 6),
    ('OP_RELAC', r'<|<=|>|>=|!=|==', 7),
    ('OP_OR', r'\|\|', 8),
    ('OP_AND', r'&&', 9),
    ('OP_NOT', r'!', 10),
    ('OP_IGUALDAD', r'==|!=', 11),
    ('PUNTO_Y_COMA', r';', 12),
    ('COMA', r',', 13),
    ('PARENTESIS_ABIERTO', r'\(', 14),
    ('PARENTESIS_CERRADO', r'\)', 15),
    ('LLAVE_ABIERTA', r'{', 16),
    ('LLAVE_CERRADA', r'}', 17),
    ('ASIGNACION', r'=', 18),
    ('IF', r'if', 19),
    ('WHILE', r'while', 20),
    ('RETURN', r'return', 21),
    ('ELSE', r'else', 22),
    ('DESCONOCIDO', r'$', 23)
]
```
- Ejecucion

![image](https://github.com/Ivannini/SSPTL2/assets/99306363/a10f1e3c-d801-4231-82a4-f36fe286b236)


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Mini Analizador Sintáctico](https://github.com/Ivannini/SSPTL2/blob/main/Mini%20analizador%20sintactico(excel).xlsx)

Análisis sintáctico, es el proceso de analizar una secuencia de entrada para determinar su estructura gramatical según una determinada función formal.

Analizador sintáctico, analiza una cadena o texto en componentes sintácticos lógicos) es un programa que normalmente es parte de un compilador. El compilador se asegura de que el código se traduce correctamente a un lenguaje ejecutable.

- Objetivo
Generar un algoritmo para analizar de manera sintactica las siguiente cadenas de caracteres.

En este trabajo analizaremos los elementos de la cadena, solo aplicando dos reglas:

R1 = E -> id + E

R2 = E -> id

Metodo: Utilizaremos un elemento de tipo pila, en el cual añadiremos los elementos analizados, y el desplazamiento, este lo obtendremos por medio de la siguiente tabla:

Entrada para el Ejercicio 1
hola+mundo

![image](https://github.com/Ivannini/SSPTL2/assets/99306363/fa6e7a0d-6274-4c2b-95cb-85cf0fd50916)


Entrada para el Ejercicio 2
a+b+c+d+e+f

![image](https://github.com/Ivannini/SSPTL2/assets/99306363/befd26de-3656-487e-8255-e87d84f6b2a4)

[EXCEL](https://github.com/Ivannini/SSPTL2/blob/main/Modulo2/Tarea%20-%20Mini%20analizador%20sint%C3%A1ctico%20(Excel).xlsx)

![image](https://github.com/Ivannini/SSPTL2/assets/99306363/745f714b-b8cb-4877-9aad-7439df799c16)



# [Codigo](https://github.com/Ivannini/SSPTL2/tree/main/Modulo2/Objetos)

- Resultado
  
![image](https://github.com/Ivannini/SSPTL2/assets/99306363/a40a56be-5655-4b9c-a193-6be333059796)


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Mini Analizador Sintáctico (código)](https://github.com/Ivannini/SSPTL2/tree/main/Modulo2)
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
# [AnalizadorSintactico(Implementacion usando objetos)](https://github.com/Ivannini/SSPTL2/blob/main/Tarea_%20Analizador%20Sint%C3%A1ctico%20(Implementaci%C3%B3n%20usando%20Objetos).pdf)

Las reglas sintacticas que leemos por el documento compilador .lr que es la tabla estados, que nos proporciona la informacion de que tipo de variables o tipo de accion estamos ejecutando y asi sacar un lenguaje mas completo que nos sevira de apollo para el anamizador semantico.

[Compilador.Ir](https://github.com/Ivannini/SSPTL2/blob/main/Modulo4/compilador.lr)


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


El resultado del análisis sintáctico es una estructura de datos que representa la estructura gramatical del código fuente, como un árbol de análisis sintáctico (también conocido como árbol de análisis o árbol de sintaxis). 

- Resultado

![image](https://github.com/Ivannini/SSPTL2/assets/99306363/70369374-a1d9-4b9a-8e56-e82273ce9431)




----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Gramática del Compilador](https://github.com/Ivannini/SSPTL2/blob/main/Gramatica%20de%20compilador.pdf)

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
# [AnalizadorSemantico](https://github.com/Ivannini/SSPTL2/blob/main/Modulo6/Practica_Analizador%20Semantico.pdf)

El analizador semántico es una fase crucial en el proceso de compilación que se encarga de analizar el significado y la coherencia del código fuente, una vez que ha pasado la etapa de análisis sintáctico. A diferencia del analizador sintáctico, que se enfoca en la estructura gramatical del código, el analizador semántico se centra en el significado y la lógica detrás de las construcciones del lenguaje de programación.

Después de que el analizador sintáctico ha generado una representación estructurada del código, como un árbol de análisis sintáctico, el analizador semántico examina este árbol para detectar posibles errores semánticos, como incompatibilidades de tipos, uso incorrecto de variables o funciones, o cualquier otra violación de las reglas semánticas del lenguaje.

Una vez que el análisis semántico ha validado el código y ha confirmado su coherencia, el proceso de traducción puede comenzar. En un proyecto específico, este texto puede ser un archivo de texto plano que contiene código fuente en el lenguaje definido por el compilador. 

<img width="470" alt="Captura de pantalla 2024-03-15 082910" src="https://github.com/Ivannini/SSPTL2/assets/99306363/f33d9408-f091-4621-9d41-1f91f90aa4f5">

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

- Resultado

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

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Generador de codigo

Script Generador

```
import re
from jinja2 import Template

# Define las plantillas para el lexer y el parser
lexer_template_str = """
import ply.lex as lex

tokens = [
    {% for token in tokens.keys() %}
    '{{ token }}',{% endfor %}
]

{% for token, pattern in tokens.items() %}
t_{{ token }} = r'{{ pattern }}'
{% endfor %}

# Ignorar espacios en blanco
t_ignore = ' \\t'

def t_newline(t):
    r'\\n+'
    t.lexer.lineno += len(t.value)

def t_error(t):
    print(f'Illegal character {{t.value[0]}}')
    t.lexer.skip(1)

lexer = lex.lex()
"""

parser_template_str = """
import ply.yacc as yacc
from lexer import tokens

{% for rule_name, rule_definition in rules.items() %}
def p_{{ rule_name }}(p):
    '''{{ rule_name }} : {{ rule_definition }}'''
    pass
{% endfor %}

def p_error(p):
    print(f'Syntax error at {{p.value}}')

parser = yacc.yacc()
"""

def parse_readme(file_path):
    with open(file_path, 'r') as file:
        content = file.read()

    tokens = {}
    rules = {}

    sections = re.split(r'## ', content)[1:]
    for section in sections:
        lines = section.strip().split('\n')
        section_name = lines[0].strip()

        if section_name == "Tokens":
            for line in lines[1:]:
                token_name, token_pattern = line.split(': ')
                tokens[token_name] = token_pattern
        elif section_name == "Reglas":
            for line in lines[1:]:
                rule_name, rule_definition = line.split(': ')
                rules[rule_name.strip()] = rule_definition.strip()

    return tokens, rules

tokens, rules = parse_readme('README.md')

lexer_template = Template(lexer_template_str)
parser_template = Template(parser_template_str)

lexer_content = lexer_template.render(tokens=tokens)
parser_content = parser_template.render(rules=rules)

with open('analyzer.py', 'w') as f:
    f.write(lexer_content)
    f.write('\n')
    f.write(parser_content)

print("Analizador léxico, sintáctico y semántico generado exitosamente en analyzer.py!")

```

Archivo Generado

```
import ply.lex as lex

tokens = [
    'NUM',
    'PLUS',
    'MINUS',
    'MUL',
    'DIV',
    'LPAREN',
    'RPAREN',
]

t_NUM = r'[0-9]+'
t_PLUS = r'\+'
t_MINUS = r'\-'
t_MUL = r'\*'
t_DIV = r'\/'
t_LPAREN = r'\('
t_RPAREN = r'\)'

# Ignorar espacios en blanco
t_ignore = ' \t'

def t_newline(t):
    r'\n+'
    t.lexer.lineno += len(t.value)

def t_error(t):
    print(f'Illegal character {t.value[0]}')
    t.lexer.skip(1)

lexer = lex.lex()

import ply.yacc as yacc
from lexer import tokens

def p_expr(p):
    '''expr : expr PLUS term
            | expr MINUS term
            | term'''
    pass

def p_term(p):
    '''term : term MUL factor
            | term DIV factor
            | factor'''
    pass

def p_factor(p):
    '''factor : NUM
              | LPAREN expr RPAREN'''
    pass

def p_error(p):
    print(f'Syntax error at {p.value}')

parser = yacc.yacc()

```

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# [Etapa Arbol Sintactico](https://github.com/Ivannini/SSPTL2/blob/main/Modulo6/%C3%A1rbol%20sint%C3%A1ctico.pdf)

para esta elaboración y decodificación del programa es necesario contar con la version 3.12 de python,(es imprescindible contar con la versión actualizada para compilar) y Tkinter para facilitar la selección del archivo que se desea traducir. Tkinter nos proporciona una herramienta que hace más práctica la visualización de nuestros archivos. En mi caso, dirigí el programa directamente a la carpeta de pruebas y le indiqué que buscara los archivos con la extensión .txt.


<img width="511" alt="Captura1" src="https://github.com/Ivannini/SSPTL2/assets/99306363/5f467874-ce5f-44f1-acea-237be4334251">


Al iniciar la compilación del programa, una vez seleccionemos nuestro archivo comenzara el analisis. este solicita el directorio del archivo a traducir. al seleccionado, comienza el proceso de  la traducción. Para este ejemplo, utilizaremos los archivos p1 y p2, ambos con extensión .txt.


<img width="263" alt="suma" src="https://github.com/Ivannini/SSPTL2/assets/99306363/29b6b174-8ef4-403e-b8a2-665c9b3ad8de">


<img width="255" alt="sumafloat" src="https://github.com/Ivannini/SSPTL2/assets/99306363/082f1ae0-87c8-4fa6-bad4-3c2af1727c37">


# Resultado del Arbol 


<img width="908" alt="Captura de pantalla 2024-03-24 194624" src="https://github.com/Ivannini/SSPTL2/assets/99306363/3e8b4f09-7be5-4a00-b68a-8398c968460e">




<img width="124" alt="Captura de pantalla 2024-03-24 194137" src="https://github.com/Ivannini/SSPTL2/assets/99306363/3591b2cb-3af3-49ed-94fa-c7ab3498428f">



<img width="158" alt="Captura de pantalla 2024-03-24 194255" src="https://github.com/Ivannini/SSPTL2/assets/99306363/a8f58853-0f4a-4fdc-bb38-8fe010104957">


Este es el arbol utilizando drawio

![arbol sintactico drawio](https://github.com/Ivannini/SSPTL2/assets/99306363/d6c0d15e-3ce6-4d52-a5c1-952b450f3cd8)



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

- Muestra del codigo que se agrego al arbol sintactico

![Arbol drawio](https://github.com/Ivannini/SSPTL2/assets/99306363/f61c7667-4d26-4a5d-90f2-daddffb4ff9b)


![Arbol2 drawio](https://github.com/Ivannini/SSPTL2/assets/99306363/4eaa40b4-bf06-477a-b7fd-05d9d1058c45)

Comprobando con el mensaje final que el codigo compilo correctamente.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# [Etapa Analizador Semantico](https://github.com/Ivannini/SSPTL2/blob/main/Modulo6/Etapa%20Analizador%20Semantico.pdf)

La etapa de análisis semántico es una fase importante en la compilación de un programa, donde se verifica que las instrucciones del código fuente tienen sentido en el contexto del lenguaje de programación utilizado y cumplen con las reglas definidas por ese lenguaje.

- Ejemplo 1
 
```
int main(){
float a;
int b;
int c;
c = a+b;
c = suma(8,9);
}
```

- Resultado

![arbol3 drawio](https://github.com/Ivannini/SSPTL2/assets/99306363/5ef3975d-c562-409c-8976-ec48098c4be6)



- Ejemplo 2:

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

- Resultado

![image](https://github.com/Ivannini/SSPTL2/assets/99306363/25d4a7ea-6145-455e-98c5-c9e5aca5084b)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Resultado del Proyecto Final

- Ejemplo de como se prueba este programa final

```
int suma ( int a , int b ) {
    return a + b ;
}
int resta ( int c ) {
    return c - c ;
}

int main ( ) {
    int resul1 ;
    int resul2 ;
    resul1 = suma ( 5 , 9 ) ;
    resul2 = resta ( resul1 ) ;
}

```

- Capturas

![image](https://github.com/Ivannini/SSPTL2/assets/99306363/8bc83518-5fa5-4e0f-a7c5-46095c582c88)


![image](https://github.com/Ivannini/SSPTL2/assets/99306363/80800e33-0043-4f9d-8977-a36dbab489b1)


![image](https://github.com/Ivannini/SSPTL2/assets/99306363/a7845251-82a2-4e4f-bae4-4fb1984c1112)


![image](https://github.com/Ivannini/SSPTL2/assets/99306363/c28d7a34-d3f1-4a49-8ad9-ee3992c547ef)


![image](https://github.com/Ivannini/SSPTL2/assets/99306363/1d96f429-f906-4786-9ca0-5d45baf7c284)



- Pero que pasaria si se llega a equivocar al poner un ejemplo y logra detectar un error durante en el programa


```
int suma(int x, int y) {
    return x + y;
}

int resta(int z) {
    return z - z;
}

int main() {
    int resul1 = suma(8, 9);
    int resul2 = resta(resul1);

    std::cout << "Resultado 1: " << resul1 << std::endl;
    std::cout << "Resultado 2: " << resul2 << std::endl;
}

```


![image](https://github.com/Ivannini/SSPTL2/assets/99306363/f5d9c8d4-934f-4083-8928-dc0fabe0078e)


![image](https://github.com/Ivannini/SSPTL2/assets/99306363/6e8cbee1-5ee4-4482-82fe-ec8897eca849)


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Conclusiones

Este proyecto fue algo bastante pesado para mí. Nunca antes había utilizado mas en Python en lo profundidad y saltar a crear un analizador que fue un desafío considerable. Por eso, tardé tanto en comprender su funcionamiento. Sin embargo, fue una experiencia muy enriquecedora, ya que ahora tengo una mejor comprensión de cómo funcionan los compiladores, aprendí muchas cosas en el proceso Para mí, eso es más que suficiente. 

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Referencias

*https://app.diagrams.net/*




































