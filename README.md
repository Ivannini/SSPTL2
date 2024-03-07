SEMNINARIO DE SOLUCION DE PROBLEMAS DE TRADUCTORES DE LENGUAJE II
AULA DUCT2-7
PROFESOR: MICHEL EMANUEL LOPEZ FRANCO

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Compilador

Un traductor es un programa que recibe como entrada código escrito en un cierto lenguaje y produce como salida código en otro lenguaje.

Un compilador es un programa informático que traduce un programa que ha sido escrito en un lenguaje de programación a un lenguaje común, usualmente lenguaje de máquina, aunque también puede ser traducido a un código intermedio (bytecode) o a texto. Este proceso de traducción se conoce como compilación.

https://es.wikipedia.org/wiki/Compilador

--------------------------------------------------------------------------------------
# Mini-Generador-lexico
Genera un pequeño analizador léxico, que identifique los siguientes tokens (identificadores y números reales) construidos de la siguiente manera.  identificadores = letra(letra|digito)* Real = entero.entero+

La tarea del generador léxico es identificar y clasificar estos tokens a partir de la cadena de entrada, siguiendo reglas predefinidas que especifican la estructura léxica del lenguaje de programación. Estas reglas suelen definirse mediante expresiones regulares.

En un generador léxico típico, cada token consta de un tipo y, opcionalmente, de un valor (lexema) asociado. Los tipos de tokens pueden incluir palabras clave, identificadores, números, operadores, delimitadores y otros elementos reconocibles en el código fuente.

Un "mini" generador léxico generalmente implica que se trata de una implementación más simplificada y compacta en comparación con un generador léxico completo. Puede ser utilizado con fines educativos, para entender los conceptos básicos de análisis léxico y compiladores, o para implementar rápidamente un análisis léxico en proyectos más pequeños.



<img width="431" alt="Captura de pantalla 2024-01-18 193843" src="https://github.com/Ivannini/SSPTL2/assets/99306363/45bda66a-77b0-4438-b743-de11f63481f6">

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Informe sobre Analizador Léxico
Un analizador léxico es una parte esencial de un compilador o intérprete que se encarga de
analizar un flujo de caracteres de un programa fuente y convertirlo en una secuencia de
"tokens" o unidades léxicas. Los tokens son unidades significativas de un lenguaje de
programación, como palabras clave, identificadores, constantes y operadores. El analizador
léxico es la primera fase del proceso de compilación y su objetivo principal es simplificar el
código fuente para su procesamiento posterior. Una parte fundamental de un compilador o intérprete, encargado de analizar el flujo de
caracteres de un programa fuente para identificar y clasificar lexemas, que son las unidades
léxicas más pequeñas con significado. Estos lexemas pueden ser palabras clave,
identificadores, operadores, números, y otros elementos del lenguaje de programación.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Analizador Lexico

El Análisis Léxico es la primera fase de un compilador, este consiste en un programa que recibe como entrada el código fuente de otro programa (secuencia de caracteres) y produce una salida compuesta de tokens (componentes léxicos) o símbolos. 

(https://user-images.githubusercontent.com/89165084/230996230-38d2e05f-9757-4d8a-a2ca-d5e657be37c9.png)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Tarea: Etapa del proyecto analizador léxico completo.
Genera un analizador léxico utilizando todos los símbolos léxicos en el archivo simbolos_lexicos.pdf.

Resultado de la ejecucion:

![Analizador completo img 1](https://user-images.githubusercontent.com/89165084/213944726-ec851892-1ca3-4041-afac-36f8ae2a7296.jpg)!
![Analizador completo img 2](https://user-images.githubusercontent.com/89165084/213944892-50c32dfd-bedf-4cc9-b39f-dbef5ddffcfc.jpg)!



# Tarea: Etapa del proyecto analizador léxico completo.
Genera un analizador léxico utilizando todos los símbolos léxicos en el archivo simbolos_lexicos.pdf.
https://github.com/Ivannini/SSPTL2/blob/main/Modulo1/Etapa%20del%20proyecto%20de%20analizador%20lexico%20completo.pdf



# Analizador sintactico
Un analizador sintáctico, es un programa informático que analiza una cadena de símbolos según las reglas de una gramática formal. El análisis sintáctico convierte el texto de entrada en otras estructuras (comúnmente árboles), que son más útiles para el posterior análisis y capturan la jerarquía implícita de la entrada. 

Un analizador léxico crea tokens de una secuencia de caracteres de entrada y son estos tokens los que son procesados por el analizador sintáctico para construir la estructura de datos, por ejemplo un árbol de análisis o árboles de sintaxis abstracta. 

El uso más común de los analizadores sintácticos es como parte de la fase de análisis de los compiladores. De modo que tienen que analizar el código fuente del lenguaje, los lenguajes de programación tienden a basarse en gramáticas libres de contexto, debido a que se pueden escribir analizadores rápidos y eficientes para estas.

# Tarea: Mini analizador sintáctico (Excel)
Subir un archivo en excel simulando las gramáticas del ejercicio 1 y 2 del archivo (Practica Analizador Sintactico LR.pdf)

Entrada para el Ejercicio 1
hola+mundo

Entrada para el Ejercicio 2
a+b+c+d+e+f

# Tarea: Mini analizador sintáctico (código)
Generar un algoritmo para analizar los Ejercicios 1 y 2 del archivo (PracticaAnalizadorSintactico.pdf)

Se modifico el codigo del analizador lexico para que funcionara junto con un codigo nuevo y hicira la funcion del analizador sintactico. Se agrego una nueva clase (Sintactico) la cual realiza as tareas importantes del mismo, ademas de que se cambio la interfaz para que concordara con el objetivo de este mini analizador sintactico.











# Tarea: Gramática del compilador

Se modifico el codigo de la clase sintactico para que de esta manera la gramatica y tabla LR que utilizara de base fuera la dada en los archivos de la nueva
gramatica, se hizo de manera que que se leyera el archivo cada que se construyera el objeto y en sus arreglos copiaba la tabla:

![image](https://user-images.githubusercontent.com/89165084/219900764-6460108c-7108-41ce-b941-c14067921367.png)

Ademas se cambio visualmente la interfaz del programa, ahora enfocandose en el analisis sintactico y cambiando el input por yn textarea, asi el usuario puede
ingresar un programa:

![image](https://user-images.githubusercontent.com/89165084/219900924-ad395dbe-7274-43ee-a2d4-164bcb39291a.png)

Ejecucion:

![image](https://user-images.githubusercontent.com/89165084/219900948-4348fa38-aaac-45fb-a270-91b6bfda7bd0.png)

![image](https://user-images.githubusercontent.com/89165084/219900969-cc45ffc5-bb61-499d-8645-c6ac39edf9d5.png)

Para proposito de que no terminara muy larga la explicacion solo se tomo captura del inicio y final de la tabla

# Arbol sintactico

El Árbol de sintaxis abstracta es una estructura de datos usada extensamente en compiladores, debido a su propiedad de representar la estructura del código de un programa. Un AST es usualmente el resultado del analizador sintáctico en la fase de un compilador. A menudo sirve como un intermediario de la representación del programa a través de etapas que requiere el compilador, y tiene un impacto fuerte en la salida final del compilador.

# Tarea: Ejemplo gramática LR utilizando tabla de compilador.

Se modifico el codigo de la clase sintactico para que se creara un arbol sintactico mientras se va realizando el analisis y asi guardar cada parte del codigo a analizar,
se crearon las clases necesarias para el arbol, una por cada regla, una siendo el nodo y las ultimas dos siendo el arbol y una que controlara todas.

![image](https://user-images.githubusercontent.com/89165084/224136832-d4bca03e-445e-4c20-8350-0a59caba4b80.png)

![image](https://user-images.githubusercontent.com/89165084/224136929-58835ee3-8954-495d-9a7d-38f99ca125f0.png)

Al final se agrego codigo en el script.js donde se imprime el arbol despues de realizar el analisis, probemos con el ejemplo int hola; :

![image](https://user-images.githubusercontent.com/89165084/224136601-0b05f6b2-b49b-49a4-8772-932d62dddadd.png)

![image](https://user-images.githubusercontent.com/89165084/224136677-781e542e-5a15-4b72-923b-19b00ea183c9.png)

Como se observa se muestra el arbol y el numero indica el nivel e cada nodo.


# Analizador Semantico

Un analizador semántico es una herramienta utilizada en el procesamiento de lenguaje natural y la compilación de programas informáticos. Su función principal es analizar la estructura sintáctica de una oración o expresión, y asignar significado a las palabras y elementos presentes en la misma.
En el caso de la compilación de programas informáticos, el analizador semántico se utiliza para validar la corrección de la sintaxis de un programa y verificar que las variables y operaciones utilizadas tengan sentido en el contexto del lenguaje de programación utilizado. Por ejemplo, si se utiliza una variable que no ha sido declarada previamente, el analizador semántico detectará el error y lo reportará.



Si ejecutamos el programa nos presenta el modelo visual que ya concoemos de un textArea y un boton, en este caso al analizar la entrada nos despliega el arbol sintactico y ademas nos dice si la estrada es aceptada o si ocurre algun error semantico, ademas de que nos indica cual.





# Generador de codigo
Un generador de código es una herramienta o recurso que genera un tipo particular de código o lenguaje de programación de computadora. Esto tiene muchos significados específicos en el mundo de TI, muchos de ellos relacionados con los procesos a veces complejos de convertir la sintaxis de programación humana al lenguaje de máquina que puede leer un sistema informático.

# Tarea: Generador e codigo
Utilizando tu arbol sintactico y con el previo analisis semanticos codifica un algoritmo que genere un codigo en lensuaje ensamblador que pueda ser ejecutado por un emulador o programa ensamblador.

Se modifico el proyecto agregando al clase genCode, dicha clase se encarga de recorrer por seguna vez el arbol sintactico esta vez no para analizarlo si no que lo realiza para escribir codigo en un archivo, este codigo representa la escrito por el usuario y lo tranforma en leguaje ensamblador, plasmandolo mediante un arreglo de strings que despues mediante un objeto Blob el cual construye el archivo con termiancion .asm listo para descargar y ejecutarlo en procesador o un emulador.



























