SEMNINARIO DE SOLUCION DE PROBLEMAS DE TRADUCTORES DE LENGUAJE II
AULA DUCT2-7
PROFESOR: MICHEL EMANUEL LOPEZ FRANCO

----------------------------------------------------------------------------------------------------

En este readme se podran observar todos los trabajos de la materia y asi como contruyo un traductor.
----------------------------------------------------------------------------------------------------
# ¿Qué es es un analizador léxico ?

Un analizador léxico es una parte de un compilador o intérprete que escanea el código fuente y lo divide en unidades básicas llamadas tokens, como palabras clave, identificadores y operadores. Es el primer paso en el proceso de traducción del código fuente a un formato que la computadora pueda entender.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Mini-Generador-lexico
Genera un pequeño analizador léxico, que identifique los siguientes tokens (identificadores y números reales) construidos de la siguiente manera.  identificadores = letra(letra|digito)* Real = entero.entero+

La tarea del generador léxico es identificar y clasificar estos tokens a partir de la cadena de entrada, siguiendo reglas predefinidas que especifican la estructura léxica del lenguaje de programación. Estas reglas suelen definirse mediante expresiones regulares.

Un "mini" generador léxico generalmente implica que se trata de una implementación más simplificada y compacta en comparación con un generador léxico completo. Puede ser utilizado con fines educativos, para entender los conceptos básicos de análisis léxico y compiladores, o para implementar rápidamente un análisis léxico en proyectos más pequeños.


<img width="431" alt="Captura de pantalla 2024-01-18 193843" src="https://github.com/Ivannini/SSPTL2/assets/99306363/45bda66a-77b0-4438-b743-de11f63481f6">

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Tarea: Mini analizador sintáctico (Excel)
Subir un archivo en excel simulando las gramáticas del ejercicio 1 y 2 del archivo (Practica Analizador Sintactico LR.pdf)

Entrada para el Ejercicio 1
hola+mundo

Entrada para el Ejercicio 2
a+b+c+d+e+f

<img width="458" alt="image" src="https://github.com/Ivannini/SSPTL2/assets/99306363/cefb22e0-fc0a-4312-87e4-292f38daf905">
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Analizador Lexico completo

El Análisis Léxico es la primera fase de un compilador, este consiste en un programa que recibe como entrada el código fuente de otro programa (secuencia de caracteres) y produce una salida compuesta de tokens (componentes léxicos) o símbolos. 
Un analizador léxico es una parte esencial de un compilador o intérprete que se encarga de analizar un flujo de caracteres de un programa fuente y convertirlo en una secuencia de "tokens" o unidades léxicas. Los tokens son unidades significativas de un lenguaje de programación, como palabras clave, identificadores, constantes y operadores. El analizador léxico es la primera fase del proceso de compilación y su objetivo principal es simplificar el código fuente para su procesamiento posterior. Una parte fundamental de un compilador o intérprete, encargado de analizar el flujo de caracteres de un programa fuente para identificar y clasificar lexemas, que son las unidades léxicas más pequeñas con significado. Estos lexemas pueden ser palabras clave, identificadores, operadores, números, y otros elementos del lenguaje de programación.

https://github.com/Ivannini/SSPTL2/blob/main/Nudelstejer_Gomez_Ivan_218130122_%20Inv_Analizador%20Lexico.pdf

(https://user-images.githubusercontent.com/89165084/230996230-38d2e05f-9757-4d8a-a2ca-d5e657be37c9.png)

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Tarea: Ejemplo gramática LR utilizando tabla de compilador.

El codigo de la clase sintactico para que se creara un arbol sintactico mientras se va realizando el analisis y asi guardar cada parte del codigo a analizar,
las clases necesarias para el arbol, una por cada regla, una siendo el nodo y las ultimas dos siendo el arbol y una que controlara todas.

![image](https://user-images.githubusercontent.com/89165084/224136832-d4bca03e-445e-4c20-8350-0a59caba4b80.png)

![image](https://user-images.githubusercontent.com/89165084/224136929-58835ee3-8954-495d-9a7d-38f99ca125f0.png)

Al final se agrego codigo en el script.js donde se imprime el arbol despues de realizar el analisis, probemos con el ejemplo int hola; :

![image](https://user-images.githubusercontent.com/89165084/224136601-0b05f6b2-b49b-49a4-8772-932d62dddadd.png)

![image](https://user-images.githubusercontent.com/89165084/224136677-781e542e-5a15-4b72-923b-19b00ea183c9.png)

Como se observa se muestra el arbol y el numero indica el nivel e cada nodo.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Tarea: Etapa del proyecto analizador léxico completo.
Genera un analizador léxico utilizando todos los símbolos léxicos en el archivo simbolos_lexicos.pdf.

Resultado de la ejecucion:

![Analizador completo img 1](https://user-images.githubusercontent.com/89165084/213944726-ec851892-1ca3-4041-afac-36f8ae2a7296.jpg)!

![Analizador completo img 2](https://user-images.githubusercontent.com/89165084/213944892-50c32dfd-bedf-4cc9-b39f-dbef5ddffcfc.jpg)!

![Lexico visual1](https://user-images.githubusercontent.com/89165084/216058211-45b5e04a-d30b-4e36-8872-c6eb2074101f.jpg)

![Lexico visual2](https://user-images.githubusercontent.com/89165084/216058237-a12973df-fb88-4dd8-a91e-8b2237fc4bcb.jpg)

Genera un analizador léxico utilizando todos los símbolos léxicos en el archivo simbolos_lexicos.pdf.
https://github.com/Ivannini/SSPTL2/blob/main/Modulo1/Etapa%20del%20proyecto%20de%20analizador%20lexico%20completo.pdf

<img width="293" alt="image" src="https://github.com/Ivannini/SSPTL2/assets/99306363/c5f1442b-7e70-43dc-b59c-ad47cd71ce61">

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Analizador sintactico
Un analizador sintáctico, es un programa informático que analiza una cadena de símbolos según las reglas de una gramática formal. El análisis sintáctico convierte el texto de entrada en otras estructuras (comúnmente árboles), que son más útiles para el posterior análisis y capturan la jerarquía implícita de la entrada. 

Un analizador léxico crea tokens de una secuencia de caracteres de entrada y son estos tokens los que son procesados por el analizador sintáctico para construir la estructura de datos, por ejemplo un árbol de análisis o árboles de sintaxis abstracta. 

El uso más común de los analizadores sintácticos es como parte de la fase de análisis de los compiladores. De modo que tienen que analizar el código fuente del lenguaje, los lenguajes de programación tienden a basarse en gramáticas libres de contexto, debido a que se pueden escribir analizadores rápidos y eficientes para estas.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Tarea: Mini analizador sintáctico (código)
Generar un algoritmo para analizar los Ejercicios 1 y 2 del archivo (PracticaAnalizadorSintactico.pdf)

Se modifico el codigo del analizador lexico para que funcionara junto con un codigo nuevo y hicira la funcion del analizador sintactico. Se agrego una nueva clase (Sintactico) la cual realiza as tareas importantes del mismo, ademas de que se cambio la interfaz para que concordara con el objetivo de este mini analizador sintactico.

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


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Gramática del compilador
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

























