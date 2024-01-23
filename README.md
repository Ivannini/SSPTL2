SEMNINARIO DE SOLUCION DE PROBLEMAS DE TRADUCTORES DE LENGUAJE II
AULA DUCT2-7
PROFESOR: MICHEL EMANUEL LOPEZ FRANCO

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Mini-Generador-lexico
Genera un pequeño analizador léxico, que identifique los siguientes tokens (identificadores y números reales) construidos de la siguiente manera.  identificadores = letra(letra|digito)* Real = entero.entero+

La tarea del generador léxico es identificar y clasificar estos tokens a partir de la cadena de entrada, siguiendo reglas predefinidas que especifican la estructura léxica del lenguaje de programación. Estas reglas suelen definirse mediante expresiones regulares.

En un generador léxico típico, cada token consta de un tipo y, opcionalmente, de un valor (lexema) asociado. Los tipos de tokens pueden incluir palabras clave, identificadores, números, operadores, delimitadores y otros elementos reconocibles en el código fuente.

Un "mini" generador léxico generalmente implica que se trata de una implementación más simplificada y compacta en comparación con un generador léxico completo. Puede ser utilizado con fines educativos, para entender los conceptos básicos de análisis léxico y compiladores, o para implementar rápidamente un análisis léxico en proyectos más pequeños.

    import re 
    def tokenTraductor(token):  
    if token == 'identificador':
        return 0
    elif token == 'entero':
        return 1
    elif token == 'real':
        return 2
    elif token == 'cadena':
        return 3
    elif token == 'tipo de dato':
        return 4
    elif token == 'opSuma':
        return 5
    elif token == 'opMul':
        return 6
    elif token == 'opRelacional':
        return 7
    elif token == 'opOr':
        return 8
    elif token == 'opAnd':
        return 9
    elif token == 'opNot':
        return 10
    elif token == 'opIgualdad':
        return 11
    elif token == 'punto y coma':
        return 12
    elif token == 'coma':
        return 13
    elif token == 'parIzq':
        return 14
    elif token == 'parDer':
        return 15
    elif token == 'llaveIzq':
        return 16
    elif token == 'llaveDer':
        return 17
    elif token == 'asignación':
        return 18
    elif token == 'condicional SI':
        return 19
    elif token == 'mientras':
        return 20
    elif token == 'regresar':
        return 21
    elif token == 'condicional SI NO':
        return 22
    elif token == 'pesos':
        return 23
    else:
        return -1

    def lexemaAnalizador(ingresado):  
    print("----------------------------------------------------------------------------")
    elementos = []
    estado = 0
    indice = 0
    cadena = ingresado + '$'  
    while (indice <= (len(cadena) - 1) and estado == 0):
        lexema = ''
        token = 'error'  
        while indice <= (len(cadena) - 1) and estado != 20:  
            if estado == 0:  # ESTADO INICIAL
                if cadena[indice].isspace():  
                    estado = 0
                elif cadena[indice].isnumeric():  # 0-9
                    estado = 1
                    lexema += cadena[indice]
                    token = 'entero'
                elif cadena[indice] == '+' or cadena[indice] == '-':  
                    estado = 20
                    lexema += cadena[indice]
                    token = 'opSuma'
                elif cadena[indice] == '=':  
                    estado = 2
                    lexema += cadena[indice]
                    token = 'asignación'
                elif cadena[indice] == ';':  
                    estado = 20
                    lexema += cadena[indice]
                    token = 'punto y coma'
                elif cadena[indice] == ',':  
                    estado = 20
                    lexema += cadena[indice]
                    token = 'coma'
                elif cadena[indice] == '(':  
                    estado = 20
                    lexema += cadena[indice]
                    token = 'parIzq'
                elif cadena[indice] == ')':  
                    estado = 20
                    lexema += cadena[indice]
                    token = 'parDer'
                elif cadena[indice] == '{':  
                    estado = 20
                    lexema += cadena[indice]
                    token = 'llaveIzq'
                elif cadena[indice] == '}':  
                    estado = 20
                    lexema += cadena[indice]
                    token = 'llaveDer'
                elif cadena[indice].isalpha() or cadena[indice] == '_':  # Es letra o _
                    estado = 4
                    lexema += cadena[indice]
                    token = 'identificador'
                elif cadena[indice] == '|':
                    estado = 3
                    lexema += cadena[indice]
                    token = 'error'
                elif cadena[indice] == '&':
                    estado = 6
                    lexema += cadena[indice]
                    token = 'error'
                elif cadena[indice] == '$':  
                    estado = 20
                    lexema += cadena[indice]
                    token = 'pesos'
                elif cadena[indice] == '*' or cadena[indice] == '/':
                    estado = 20
                    lexema += cadena[indice]
                    token = 'opMul'
                elif cadena[indice] == '<' or cadena[indice] == '>':  
                    estado = 7
                    lexema += cadena[indice]
                    token = 'opRelacional'
                elif cadena[indice] == '!':  
                    estado = 8
                    lexema += cadena[indice]
                    token = 'opNot'
                elif cadena[indice] == '"':  
                    estado = 9
                    lexema += cadena[indice]
                    token = 'cadena'
                else:  # Salió algo inesperado, terminamos análisis
                    estado = 20
                    lexema += cadena[indice]  # NO TENÍA EL + !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    token = 'error'
                indice += 1  # Procedemos al siguiente char en cadena

            elif estado == 1:  
                if cadena[indice].isnumeric():  
                    estado = 1
                    lexema += cadena[indice]
                    token = 'entero'
                    indice += 1  
                elif cadena[indice] == '.':  
                    estado = 5
                    lexema += cadena[indice]
                    token = 'error'
                    indice += 1  
                elif cadena[indice] == '+' or cadena[indice] == '-' or cadena[indice] == '*' or cadena[indice] == '/':  
                    estado = 20
                elif cadena[indice].isnumeric() is False and cadena[indice] != '$' and cadena[indice].isspace() is False:  
                    estado = 20
                    lexema += cadena[indice]
                    token = 'error'
                    indice += 1  
                elif cadena[indice] == '.': 
                    estado = 5
                    lexema += cadena[indice]
                    token = 'punto'
                else:
                    estado = 20
                    #lexema += cadena[indice]
                    #token = 'error'
                #indice += 1  # Procedemos al siguiente char en cadena

            elif estado == 2:  
                if cadena[indice] == '=':  
                    estado = 20
                    lexema += cadena[indice]
                    token = 'opIgualdad'
                    indice += 1  
                else:
                    estado = 20
                #indice += 1  

            elif estado == 3:  # OP LÓGICO ||
                if cadena[indice] == '|':
                    estado = 20
                    lexema += cadena[indice]
                    token = 'opOr'
                    indice += 1  
                else:
                    estado = 20
                    #lexema += cadena[indice]
                    #token = 'error'
                #indice += 1  

            elif estado == 4:  
                if cadena[indice].isdigit() or cadena[indice].isalpha() or cadena[indice] == '_':  # Formato variable
                    estado = 4
                    lexema += cadena[indice]
                    token = 'identificador'
                    indice += 1
                else:
                    estado = 20

            elif estado == 5:  
                if cadena[indice].isnumeric():  # 0-9
                    estado = 5
                    lexema += cadena[indice]
                    token = 'real'
                    indice += 1  
                elif cadena[indice] == '+' or cadena[indice] == '-' or cadena[indice] == '*' or cadena[indice] == '/':  
                    estado = 20
                elif cadena[indice].isnumeric() is False and cadena[indice] != '$' and cadena[indice].isspace() is False:  
                    estado = 20
                    lexema += cadena[indice]
                    token = 'error'
                    indice += 1  
                else:
                    estado = 20
                    #lexema += cadena[indice]
                    #token = 'constante'
                #indice += 1  

            elif estado == 6:  # OP LÓGICO &&
                if cadena[indice] == '&':
                    estado = 20
                    lexema += cadena[indice]
                    token = 'opAnd'
                    indice += 1  
                else:
                    estado = 20
                    #lexema += cadena[indice]
                    #token = 'error'
                #indice += 1  

            elif estado == 7:  # OP RELACIONAL < y >
                if cadena[indice] == '=':
                    estado = 20
                    lexema += cadena[indice]
                    token = 'opRelacional'
                    indice += 1  
                else:
                    estado = 20

            elif estado == 8:  # OP RELACIONAL !=
                if cadena[indice] == '=':
                    estado = 20
                    lexema += cadena[indice]
                    token = 'opIgualdad'
                    indice += 1 
                else:
                    estado = 20

            elif estado == 9:  # CADENAS - STRINGS
                if cadena[indice] == '"':
                    estado = 20
                    lexema += cadena[indice]
                    token = 'cadena'
                    indice += 1  
                elif cadena[indice] == '$':
                    estado = 20
                    token = 'error'
                else:
                    estado = 9
                    lexema += cadena[indice]
                    token = 'cadena'
                    indice += 1  

        estado = 0  # Reiniciamos el conteo
        elementos.append({'token': token, 'lexema': lexema})

    for elemento in elementos:
        # Estos condicionales aparte para no tener que analizar letra por letra la condición (así lo tenemos arriba)
        if elemento['lexema'] == "if":
            elemento['token'] = 'condicional SI'
        elif elemento['lexema'] == "else":
            elemento['token'] = 'condicional SI NO'
        elif elemento['lexema'] == "while":
            elemento['token'] = 'mientras'
        elif elemento['lexema'] == "return":
            elemento['token'] = 'regresar'
        elif elemento['lexema'] == "int" or elemento['lexema'] == "float" or elemento['lexema'] == "char" or elemento['lexema'] == "void":
            elemento['token'] = 'tipo de dato'
        print(elemento, "Tipo:", tokenTraductor(elemento['token']))

    return elementos

    while True:
    txt = input("Cadena a analizar: ")
    ele = lexemaAnalizador(txt)


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


