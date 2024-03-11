SEMNINARIO DE SOLUCION DE PROBLEMAS DE TRADUCTORES DE LENGUAJE II
AULA DUCT2-7
Seccion: D02
Siglo: 2024A
Lunes y Miercoles 1 a 3 PM
PROFESOR: MICHEL EMANUEL LOPEZ FRANCO

En este readme se podran observar todos los trabajos de la materia y asi como contruyo un traductor.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# [¿Qué es es un analizador léxico?](https://github.com/Ivannini/SSPTL2/blob/main/Nudelstejer_Gomez_Ivan_218130122_%20Inv_Analizador%20Lexico.pdf)

Un analizador léxico es una parte de un compilador o intérprete que escanea el código fuente y lo divide en unidades básicas llamadas tokens, como palabras clave, identificadores y operadores. Es el primer paso en el proceso de traducción del código fuente a un formato que la computadora pueda entender.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Mini Generador lexico](https://github.com/Ivannini/SSPTL2/blob/main/Modulo2/Mini%20Generador%20lexico.py)
Genera un pequeño analizador léxico, que identifique los siguientes tokens (identificadores y números reales) construidos de la siguiente manera.  identificadores = letra(letra|digito)* Real = entero.entero+

La tarea del generador léxico es identificar y clasificar estos tokens a partir de la cadena de entrada, siguiendo reglas predefinidas que especifican la estructura léxica del lenguaje de programación. Estas reglas suelen definirse mediante expresiones regulares.

Un "mini" generador léxico generalmente implica que se trata de una implementación más simplificada y compacta en comparación con un generador léxico completo. Puede ser utilizado con fines educativos, para entender los conceptos básicos de análisis léxico y compiladores, o para implementar rápidamente un análisis léxico en proyectos más pequeños.


<img width="431" alt="Captura de pantalla 2024-01-18 193843" src="https://github.com/Ivannini/SSPTL2/assets/99306363/45bda66a-77b0-4438-b743-de11f63481f6">

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Mini analizador sintáctico (Excel)](https://github.com/Ivannini/SSPTL2/blob/main/Mini%20analizador%20sintactico(excel).xlsx)
Subir un archivo en excel simulando las gramáticas del ejercicio 1 y 2 del archivo (Practica Analizador Sintactico LR.pdf)

Entrada para el Ejercicio 1
hola+mundo

Entrada para el Ejercicio 2
a+b+c+d+e+f

<img width="458" alt="image" src="https://github.com/Ivannini/SSPTL2/assets/99306363/cefb22e0-fc0a-4312-87e4-292f38daf905">

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Analizador Lexico completo](https://github.com/Ivannini/SSPTL2/blob/main/Modulo1/Etapa%20del%20proyecto%20de%20analizador%20lexico%20completo.pdf)

El Análisis Léxico es la primera fase de un compilador, este consiste en un programa que recibe como entrada el código fuente de otro programa (secuencia de caracteres) y produce una salida compuesta de tokens (componentes léxicos) o símbolos. 
Un analizador léxico es una parte esencial de un compilador o intérprete que se encarga de analizar un flujo de caracteres de un programa fuente y convertirlo en una secuencia de "tokens" o unidades léxicas. Los tokens son unidades significativas de un lenguaje de programación, como palabras clave, identificadores, constantes y operadores. 

# [Codigo del analizador lexico completo](https://github.com/Ivannini/SSPTL2/tree/main/Modulo1/Simbolos_lexicos)
En esta parte del codigo se puede observar que se utilizaron todos los simbolos lexicos del archivo, para asi realizar la actividad.

      switch = {
            self.ERROR: self.m_ERROR,
            self.IDENTIFICADOR: self.m_IDENTIFICADOR,
            self.ENTERO: self.m_ENTERO,
            self.REAL: self.m_REAL,
            self.CADENA: self.m_CADENA,
            self.OPSUMA: self.m_OPMAS,
            self.OPRESTA: self.m_OPMENOS,
            self.OPMULTIPLICACION: self.m_OPMULTI,
            self.OPDIVISION: self.m_OPDIV,
            self.OPMAYORQ: self.m_MAYORQUE,
            self.OPMENORQ: self.m_MENORQUE,
            self.OPMAYOROIGUAL: self.m_MAYORIGUAL,
            self.OPMENOROIGUAL: self.m_MENORIGUAL,
            self.OPOR: self.m_OR,
            self.OPAND: self.m_AND,
            self.OPNOT: self.m_NOT,
            self.OPIGUAL: self.m_IGUAL,
            self.OPESIGUAL: self.m_ESIGUAL,
            self.OPESDIFERENTE: self.m_ESDIFERENTE,
            self.PUNTOYCOMA: self.m_PUNTOCOMA,
            self.COMA: self.m_COMA,
            self.PARENTESIOSABIERTO: self.m_PARENTESISABIERTO,
            self.PARENTESISCERRADO: self.m_PARENTESISCERRADO,
            self.LLAVEABIERTA: self.m_LLAVEABIERTA,
            self.LLAVECERRADA: self.m_LLAVECERRADA,
            self.BRACKETABIERTO: self.m_BRACKETABIERTO,
            self.BRACKETCERRADO: self.m_BRACKETCERRADO,
            self.DOSPUNTOS: self.m_DOSPUNTOS,
            self.IF: self.m_IF,
            self.WHILE: self.m_WHILE,
            self.RETURN: self.m_RETURN,
            self.ELSE: self.m_ELSE,
            self.INT: self.m_INT,
            self.FLOAT: self.m_FLOAT,
            self.VOID: self.m_VOID,
            self.PESO: self.m_PESO
        }



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

<img width="410" alt="image" src="https://github.com/Ivannini/SSPTL2/assets/99306363/60a6948f-8bb3-4b55-873d-0701cd521801">


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# [Mini analizador sintáctico (código)](https://github.com/Ivannini/SSPTL2/tree/main/Modulo2)
Generar un algoritmo para analizar los Ejercicios 1 y 2, los que se realizaron en excel, ahora se realizaran mediante codigo.

#Codigo
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

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Ejemplo gramática LR utilizando tabla de compilador](https://github.com/Ivannini/SSPTL2/blob/main/Ejemplo%20de%20Gram%C3%A1ticaLR%20tabla%20compilador.pdf)

El codigo de la clase sintactico para que se creara un arbol sintactico mientras se va realizando el analisis y asi guardar cada parte del codigo a analizar,
las clases necesarias para el arbol, una por cada regla, una siendo el nodo y las ultimas dos siendo el arbol y una que controlara todas.

![image](https://user-images.githubusercontent.com/89165084/224136832-d4bca03e-445e-4c20-8350-0a59caba4b80.png)

![image](https://user-images.githubusercontent.com/89165084/224136929-58835ee3-8954-495d-9a7d-38f99ca125f0.png)

Al final se agrego codigo en el script.js donde se imprime el arbol despues de realizar el analisis, probemos con el ejemplo int hola; :

![image](https://user-images.githubusercontent.com/89165084/224136601-0b05f6b2-b49b-49a4-8772-932d62dddadd.png)

![image](https://user-images.githubusercontent.com/89165084/224136677-781e542e-5a15-4b72-923b-19b00ea183c9.png)



-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# [Etapa del proyecto analizador léxico completo](https://github.com/Ivannini/SSPTL2/blob/main/Modulo1/Etapa%20del%20proyecto%20de%20analizador%20lexico%20completo.pdf)
Genera un analizador léxico utilizando todos los símbolos léxicos en el archivo simbolos_lexicos.pdf.

Resultado de la ejecucion:

![Analizador completo img 1](https://user-images.githubusercontent.com/89165084/213944726-ec851892-1ca3-4041-afac-36f8ae2a7296.jpg)!

![Analizador completo img 2](https://user-images.githubusercontent.com/89165084/213944892-50c32dfd-bedf-4cc9-b39f-dbef5ddffcfc.jpg)!

![Lexico visual1](https://user-images.githubusercontent.com/89165084/216058211-45b5e04a-d30b-4e36-8872-c6eb2074101f.jpg)

![Lexico visual2](https://user-images.githubusercontent.com/89165084/216058237-a12973df-fb88-4dd8-a91e-8b2237fc4bcb.jpg)



<img width="293" alt="image" src="https://github.com/Ivannini/SSPTL2/assets/99306363/c5f1442b-7e70-43dc-b59c-ad47cd71ce61">

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# [Analizador Sintactico (Implementacion usando Objetos)](https://github.com/Ivannini/SSPTL2/blob/main/Tarea_%20Analizador%20Sint%C3%A1ctico%20(Implementaci%C3%B3n%20usando%20Objetos).pdf)
Se ha implementado una jerarquía de clases utilizando herencia y clases abstractas para representar elementos de una pila, como Terminal, NoTerminal, y Estado. La clase Pila se encarga de gestionar una lista que actúa como una pila, con métodos para agregar, eliminar y mostrar elementos. Se han creado objetos de las clases definidas, insertándolos en la pila y mostrando su contenido. La estructura general del código sigue principios de programación orientada a objetos (OOP) con encapsulamiento y polimorfismo.

Se definen tres clases concretas que heredan de ElementoPila: Terminal, NoTerminal y Estado. Cada una de estas clases representa un tipo de elemento que puede estar en la pila. Cada clase implementa el método muestra según su propio tipo.

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

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# [Gramática del compilador](https://github.com/Ivannini/SSPTL2/blob/main/Gramatica%20de%20compilador.pdf)
Utilizando tu analizador léxico y tu algoritmo para trabajar con las tablas lr. Carga e implementa la siguiente gramática.
(Los archivos de la garmatica esten en: 

https://github.com/Ivannini/SSPTL2/tree/main/GramaticaLR/classes

Se modifico el codigo de la clase sintactico para que de esta manera la gramatica y tabla LR que utilizara de base fuera la dada en los archivos de la nueva
gramatica, se hizo de manera que que se leyera el archivo cada que se construyera el objeto y en sus arreglos copiaba la tabla:

    import { Pila } from './pila.js';
    import * as genR from './Tree/generadorReglas.js';
    import { Nodo, Arbol } from './Tree/arbol.js';

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



Ademas se cambio visualmente la interfaz del programa, ahora enfocandose en el analisis sintactico y cambiando el input por yn textarea, asi el usuario puede
ingresar un programa:


![image](https://user-images.githubusercontent.com/89165084/219900924-ad395dbe-7274-43ee-a2d4-164bcb39291a.png)

Ejecucion:

![image](https://user-images.githubusercontent.com/89165084/219900948-4348fa38-aaac-45fb-a270-91b6bfda7bd0.png)

![image](https://user-images.githubusercontent.com/89165084/219900969-cc45ffc5-bb61-499d-8645-c6ac39edf9d5.png)

Para proposito de que no terminara muy larga la explicacion solo se tomo captura del inicio y final de la tabla

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Construccion del Traductor

Aquí tienes una versión ligeramente modificada para mejorar la redacción:

En esta sección, se presentarán los avances generales del traductor. Mientras las demás secciones explican partes específicas del traductor, aquí se mostrará el traductor en su conjunto, si se puede llamar así. Claro que se irá actualizando, pero los avances estarán visibles.

En cuanto a parsetab.py, este archivo contiene información crucial sobre cómo el analizador sintáctico debe interpretar y procesar la entrada. Algunos puntos clave incluyen:

- `_tabversion`: Indica la versión de la tabla de análisis, útil para garantizar compatibilidad entre diferentes versiones del generador de analizadores sintácticos.
- `_lr_method`: Especifica el método de análisis utilizado, en este caso, el método LALR (Look-Ahead Left-to-Right, Rightmost derivation).
- `_lr_signature`: Define la firma de la tabla de análisis, describiendo las reglas gramaticales que el analizador debe reconocer. En la firma proporcionada, se ven reglas para expresiones, términos y factores.

A continuación, se presenta una parte del código:

```python
_tabversion = '3.10'
_lr_method = 'LALR'
_lr_signature = 'DIVIDE LPAREN MINUS NUMBER PLUS RPAREN TIMESexpression :
expression PLUS term\n | expression MINUS
term\n | termterm : term TIMES factor\n |
term DIVIDE factor\n | factorfactor : NUMBER\n |
LPAREN expression RPAREN'
```

Además, se define una función para manejar el token NUMBER, que representa un número entero en la entrada. Esta función utiliza una expresión regular para identificar y convertir los números en enteros:

```python
def t_NUMBER(t):
    r'\d+'
    t.value = int(t.value)
    return t
```

También se definen expresiones regulares para cada token simple, utilizadas para identificar y reconocer patrones correspondientes a cada token:

```python
t_PLUS = r'\+'
t_MINUS = r'-'
t_TIMES = r'\*'
t_DIVIDE = r'/'
t_LPAREN = r'\('
t_RPAREN = r'\)'
```

Estas expresiones regulares son esenciales para el reconocimiento de patrones en la entrada del analizador sintáctico."
























